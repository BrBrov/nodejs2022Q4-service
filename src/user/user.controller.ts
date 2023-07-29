import {
  Body,
  Controller,
  Get,
  HttpStatus,
  HttpException,
  Post,
  Param,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import UserService from './user.service';
import {
  CreateUserDto,
  UpdatePasswordDto,
  UserOutputData,
} from 'src/database/models/user-models';
import { UUIDValidationPipe } from 'src/pipe/uuid-validater';

@Controller()
export default class UserController {
  constructor(private ctrl: UserService) {}

  @Get()
  public returnAllUsers(): Array<UserOutputData> {
    return this.ctrl.getUsers();
  }

  @Get(':id')
  public getUser(@Param('id', UUIDValidationPipe) id: string): UserOutputData {
    console.log(id);
    const user = this.ctrl.getUser(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): UserOutputData {
    const newUser = this.ctrl.createUser(body);

    if (!newUser) {
      throw new HttpException(
        'Access token is missing or invalid',
        HttpStatus.UNAUTHORIZED,
      );
    }

    return newUser;
  }

  @Put(':id')
  public updateUser(
    @Param('id', UUIDValidationPipe) id: string,
    @Body() body: UpdatePasswordDto,
  ): UserOutputData {
    const result = this.ctrl.setNewPassword(id, body);

    if (result === null) {
      throw new HttpException('oldPassowrd is wrong', HttpStatus.FORBIDDEN);
    }

    if (!result) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public deleteUser(@Param('id', UUIDValidationPipe) id: string): void {
    const result = this.ctrl.deleteUser(id);

    if (!result) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
