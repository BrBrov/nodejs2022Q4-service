import { IsString } from 'class-validator';

export class DecodeData {
  id: string;
  login: string;
  iat: number;
  exp: number;
}

export class Token {
  @IsString()
  refreshToken: string;
}

export class TokenPair extends Token {
  accessToken: string;
}
