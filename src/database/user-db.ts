import { DataBase, db } from './db';
import UserData from './db/user';
import {
  UserOutputData,
  CreateUserDto,
  UpdatePasswordDto,
} from './models/user-models';

export class UserDataBase {
  private db: DataBase;

  constructor(db: DataBase) {
    this.db = db;
  }

  public getUsers(): Array<UserOutputData> {
    return this.db.users.map((user: UserData) => user.getUserOutput());
  }

  public getUser(id: string): UserOutputData | null {
    const user: UserData = this.db.users.find((userData: UserData) => {
      if (userData.getUserID() === id) return userData;
    });

    if (!user) return null;

    return user.getUserOutput();
  }

  public createUser(newUser: CreateUserDto): UserOutputData | null {
    if (this.db.users.some((user: UserData) => user.checkUser(newUser))) {
      return null;
    }

    const userDto = new UserData(newUser);
    this.db.users.push(userDto);
    return userDto.getUserOutput();
  }

  public updateUser(
    id: string,
    dto: UpdatePasswordDto,
  ): UserOutputData | null | undefined {
    const user: UserData = this.db.users.find(
      (data: UserData) => data.getUserID() === id,
    );

    if (!user) return undefined;

    const result: boolean = user.updatePassword(dto);

    if (!result) return null;

    return user.getUserOutput();
  }

  public deleteUser(id: string): boolean {
    if (!this.db.users.some((user: UserData) => user.getUserID() === id)) {
      return false;
    }

    this.db.users = this.db.users.filter(
      (user: UserData) => user.getUserID() !== id,
    );

    return true;
  }
}

export const userDB = new UserDataBase(db);
