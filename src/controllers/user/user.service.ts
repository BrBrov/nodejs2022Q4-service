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

  public async getUsers(): Promise<UserEntity[]> {
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
    return await this.db.save(userDto);
  }

  public async getUser(id: string): Promise<UserOutputData> {
    const user = await this.db.find({
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

    return user[0];
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

        return user;
      });
  }

  public async deleteUser(id: string) {
    return await this.db.delete(id);
  }
}
