import { v4 as uuidv4 } from 'uuid';
import { User, CreateUserDto } from '../models/user-models';

export default class UserData {
  private id: string;
  private login: string;
  private password: string;
  private version: number;
  private createdAt: number;
  private updatedAt: number;

  constructor(user: CreateUserDto) {
    this.id = uuidv4();
    this.login = user.login;
    this.password = user.password;
    this.version = 0;
    this.createdAt = new Date().getTime();
    this.updatedAt = new Date().getTime();
  }

  public getUserID(): string {
    return this.id;
  }

  public getUserData(): User {
    return {
      id: this.id,
      login: this.login,
      password: this.password,
      version: this.version,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  public updatePassword(oldPassword: string, newPassword: string): boolean {
    if (oldPassword !== this.password) return false;

    this.password = newPassword;
    this.updateTimeStamp();
    this.countVersionUpdate();

    return true;
  }

  private updateTimeStamp(): void {
    this.updatedAt = new Date().getTime();
  }

  private countVersionUpdate(): void {
    this.version += 1;
  }
}
