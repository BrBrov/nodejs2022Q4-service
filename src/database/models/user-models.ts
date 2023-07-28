export class CreateUserDto {
  login: string;
  password: string;
}

export class UpdatePasswordDto {
  oldPassword: string; // previous password
  newPassword: string; // new password
}

export class UserOutputData {
  id: string; // uuid v4
  login: string;
  version: number; // integer number, increments on update
  createdAt: number; // timestamp of creation
  updatedAt: number; // timestamp of last update
}
export class User extends UserOutputData {
  password: string;
}
