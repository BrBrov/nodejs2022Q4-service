import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import 'dotenv/config.js';

@Module({
  imports: [
    JwtModule.register({
      global: false,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRE_TIME },
    }),
  ],
  providers: [
    {
      provide: 'AccessJwtService',
      useExisting: JwtService,
    },
  ],
  exports: ['AccessJwtService'],
})
export class AccessJwtModule {}
