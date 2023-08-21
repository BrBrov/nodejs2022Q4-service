import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { DecodeData, TokenPair } from 'src/models/auth-models';
import { CreateUserDto, UserOutputData } from 'src/models/user-models';
import UserAuthEntity from 'src/type-orm/entity/auth-entity';
import HashService from 'src/util/hash';
import { Repository } from 'typeorm';

@Injectable()
export default class AuthService {
  constructor(
    @InjectRepository(UserAuthEntity) private auth: Repository<UserAuthEntity>,
    private hasher: HashService,
    @Inject('AccessJwtService') private jwt: JwtService,
    @Inject('RefreshJwtService') private refresh: JwtService,
  ) {}

  public async create(body: CreateUserDto): Promise<UserOutputData> {
    const user = await this.auth.findOne({
      where: {
        login: body.login,
      },
      select: {
        id: true,
        login: true,
        version: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (user) {
      return user;
    }

    const hashPass = await this.hasher.hashPass(body.password);

    const newUser = await this.auth.save({
      login: body.login,
      password: hashPass,
    });

    delete newUser['password'];

    return newUser as UserOutputData;
  }

  public async login(body: CreateUserDto): Promise<TokenPair | null> {
    const user = await this.auth.findOne({
      where: {
        login: body.login,
      },
    });

    if (!user) return null;

    if (!this.hasher.verifyPass(body.password, user.password)) {
      return null;
    }

    return await this.generateJwtPair(user);
  }

  public async refreshTokens(refToken): Promise<TokenPair | null> {
    const decodeData: DecodeData = this.refresh.decode(refToken) as DecodeData;

    try {
      decodeData.id;
      decodeData.login;
    } catch {
      return;
    }

    const user = await this.auth.findOne({
      where: {
        id: decodeData.id,
        login: decodeData.login,
      },
    });

    if (!user) return null;

    return await this.generateJwtPair(user);
  }

  private async generateJwtPair(user: UserAuthEntity): Promise<TokenPair> {
    return {
      accessToken: await this.jwt.signAsync({
        id: user.id,
        login: user.login,
      }),
      refreshToken: await this.refresh.signAsync({
        id: user.id,
        login: user.login,
      }),
    };
  }
}
