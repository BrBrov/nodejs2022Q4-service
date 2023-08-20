import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserAuthEntity from 'src/type-orm/entity/auth-entity';
import AuthController from './auth.contorller';
import AuthService from './auth.service';
import { AccessJwtModule } from './JwtModules/access-jwt.module';
import { RefreshJwtModule } from './JwtModules/refresh-jwt.module';
import HashService from 'src/util/hash';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserAuthEntity]),
    AccessJwtModule,
    RefreshJwtModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, HashService],
})
export default class AuthModule {}
