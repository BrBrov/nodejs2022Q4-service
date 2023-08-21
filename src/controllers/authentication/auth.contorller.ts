import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import AuthService from './auth.service';
import { CreateUserDto, UserOutputData } from 'src/models/user-models';
import { UserDTOValidationPipe } from 'src/pipe/user-pipes/user-dto';
import { TokenPair } from 'src/models/auth-models';

@Controller()
export default class AuthController {
  constructor(private ctrl: AuthService) {}

  @Post('signup')
  public async createUser(
    @Body(UserDTOValidationPipe) body: CreateUserDto,
  ): Promise<UserOutputData> {
    return await this.ctrl.create(body);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async loginUser(
    @Body(UserDTOValidationPipe) body: CreateUserDto,
  ): Promise<TokenPair> {
    const result = await this.ctrl.login(body);

    if (!result) {
      throw new HttpException(
        'Incorrect login or password',
        HttpStatus.FORBIDDEN,
      );
    }

    return result;
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  public async refreshToken(
    @Body('refreshToken') token: string,
  ): Promise<TokenPair> {
    const result = await this.ctrl.refreshTokens(token);

    if (result === null) {
      throw new HttpException(
        'Refresh token is invalid or expired',
        HttpStatus.FORBIDDEN,
      );
    }

    if (!result) {
      throw new HttpException(
        'No refreshToken in body',
        HttpStatus.UNAUTHORIZED,
      );
    }

    return result;
  }
}
