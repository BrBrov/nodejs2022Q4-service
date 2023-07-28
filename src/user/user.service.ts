import { Injectable } from '@nestjs/common';
import { userDB, UserDataBase } from '../database/user-db';
import {
  CreateUserDto,
  UpdatePasswordDto,
  UserOutputData,
} from 'src/database/models/user-models';

@Injectable()
export default class UserService {
  private readonly db: UserDataBase = userDB;

  public getUsers(): Array<UserOutputData> {
    return this.db.getUsers();
  }

  public createUser(userDto: CreateUserDto): UserOutputData | null {
    return this.db.createUser(userDto);
  }

  public getUser(id: string): UserOutputData | null {
    return this.db.getUser(id);
  }

  public setNewPassword(
    id: string,
    dto: UpdatePasswordDto,
  ): UserOutputData | null | undefined {
    return this.db.updateUser(id, dto);
  }

  public deleteUser(id: string): boolean {
    return this.db.deleteUser(id);
  }
}
