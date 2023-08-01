import { v4 as uuidv4 } from 'uuid';
import {
  User,
  CreateUserDto,
  UserOutputData,
  UpdatePasswordDto,
} from '../models/user-models';

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
    this.version = 1;
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

  public updatePassword(dto: UpdatePasswordDto): boolean {
    const { oldPassword, newPassword } = { ...dto };

    if (oldPassword !== this.password) return false;

    this.password = newPassword;
    this.updateTimeStamp();
    this.countVersionUpdate();

    return true;
  }

  public getUserOutput(): UserOutputData {
    return {
      id: this.id,
      login: this.login,
      version: this.version,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  public checkUser(userDto: CreateUserDto): boolean {
    if (userDto.login === this.login) return true;
    return false;
  }

  private updateTimeStamp(): void {
    this.updatedAt = new Date().getTime();
  }

  private countVersionUpdate(): void {
    this.version += 1;
  }
}
