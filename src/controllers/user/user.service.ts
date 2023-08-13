import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateUserDto,
  UpdatePasswordDto,
  User,
  UserOutputData,
} from 'src/models/user-models';
import UserEntity from 'src/type-orm/entity/user-entity';
import { Repository } from 'typeorm';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly db: Repository<UserEntity>,
  ) {}

  public async getUsers(): Promise<UserOutputData[]> {
    return await this.db.find({
      select: {
        id: true,
        login: true,
        version: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  public async createUser(userDto: CreateUserDto): Promise<User> {
    return await this.db.save({ ...userDto }).catch(() => {
      return this.db.findOne({
        where: {
          login: userDto.login,
          password: userDto.password,
        },
        select: {
          id: true,
          login: true,
          createdAt: true,
          updatedAt: true,
          version: true,
        },
      });
    });
  }

  public async getUser(id: string): Promise<UserOutputData> {
    const user = await this.db.findOne({
      select: {
        id: true,
        login: true,
        version: true,
        createdAt: true,
        updatedAt: true,
      },
      where: {
        id: id,
      },
    });

    return user;
  }

  public async setNewPassword(
    id: string,
    dto: UpdatePasswordDto,
  ): Promise<User | null | undefined> {
    const user = await this.db.findOne({
      where: {
        id: id,
      },
      select: {
        id: true,
        login: true,
        version: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) return undefined;

    return await this.db
      .update(
        { id: id, password: dto.oldPassword },
        { password: dto.newPassword },
      )
      .then((result) => {
        if (result.affected === 0) return null;

        return this.db.findOne({
          where: {
            id: id,
          },
          select: {
            id: true,
            login: true,
            version: true,
            createdAt: true,
            updatedAt: true,
          },
        });
      });
  }

  public async deleteUser(id: string): Promise<boolean> {
    return await this.db.delete(id).then((result) => {
      if (result.affected === 0) return false;

      return true;
    });
  }
}
