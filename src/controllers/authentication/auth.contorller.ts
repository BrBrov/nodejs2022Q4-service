import { Body, Controller, Post } from '@nestjs/common';
import AuthService from './auth.service';
import { CreateUserDto } from 'src/models/user-models';
import { UserDTOValidationPipe } from 'src/pipe/user-pipes/user-dto';

@Controller()
export default class AuthController {
  constructor(private ctrl: AuthService) {}

  @Post('signup')
  public async createUser(@Body(UserDTOValidationPipe) body: CreateUserDto) {
    return await this.ctrl.create(body);
  }

  @Post('login')
  public async loginUser(@Body(UserDTOValidationPipe) body: CreateUserDto) {
    const result = await this.ctrl.login(body);

    return result;
  }
}
