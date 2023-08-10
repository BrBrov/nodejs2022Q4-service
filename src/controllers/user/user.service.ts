import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from 'src/type-orm/entity/user-entity';
import { Repository } from 'typeorm';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly db: Repository<UserEntity>,
  ) {}

  public getUsers(): boolean {
    return this.db.manager.connection.isInitialized;
  }

  // public createUser(userDto: CreateUserDto): UserOutputData | null {
  //   return this.db.createUser(userDto);
  // }

  // public getUser(id: string): UserOutputData | null {
  //   return this.db.getUser(id);
  // }

  // public setNewPassword(
  //   id: string,
  //   dto: UpdatePasswordDto,
  // ): UserOutputData | null | undefined {
  //   return this.db.updateUser(id, dto);
  // }

  // public deleteUser(id: string): boolean {
  //   return this.db.deleteUser(id);
  // }
}
