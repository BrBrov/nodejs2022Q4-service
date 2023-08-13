import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import UserService from './user.service';
import {
  CreateUserDto,
  UpdatePasswordDto,
  UserOutputData,
} from 'src/models/user-models';
import { UserDTOValidationPipe } from 'src/pipe/user-pipes/user-dto';
import { UUIDValidationPipe } from 'src/pipe/uuid-validater';
import { UserUpdateDTOValidationPipe } from 'src/pipe/user-pipes/user-update';

@Controller()
export default class UserController {
  constructor(private ctrl: UserService) {}

  @Get()
  public async returnAllUsers(): Promise<UserOutputData[]> {
    return await this.ctrl.getUsers();
  }

  @Get(':id')
  public async getUser(@Param('id', UUIDValidationPipe) id: string) {
    const user = await this.ctrl.getUser(id);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async createUser(
    @Body(UserDTOValidationPipe) body: CreateUserDto,
  ): Promise<UserOutputData> {
    const newUser = await this.ctrl.createUser(body);

    delete newUser['password'];

    return newUser;
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  public async updateUser(
    @Param('id', UUIDValidationPipe) id: string,
    @Body(UserUpdateDTOValidationPipe) body: UpdatePasswordDto,
  ): Promise<UserOutputData> {
    const result = await this.ctrl.setNewPassword(id, body);

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
  public async deleteUser(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<void> {
    const result = await this.ctrl.deleteUser(id);

    if (!result) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
