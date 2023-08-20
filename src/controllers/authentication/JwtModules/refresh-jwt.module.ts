import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import 'dotenv/config.js';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_REFRESH_KEY,
      signOptions: { expiresIn: process.env.TOKEN_REFRESH_EXPIRE_TIME },
    }),
  ],
  providers: [
    {
      provide: 'RefreshJwtService',
      useExisting: JwtService,
    },
  ],
  exports: ['RefreshJwtService'],
})
export class RefreshJwtModule {}
