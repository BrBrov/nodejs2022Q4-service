import { Injectable } from '@nestjs/common';
import { db, DataBase } from '../database/db';
import UserData from 'src/database/db/user';

@Injectable()
export default class UserService {
  private readonly db: DataBase = db;

  public getUsers(): Array<UserData> {
    return this.db.getUsers();
  }
}
