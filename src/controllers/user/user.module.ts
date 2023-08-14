import { Module } from '@nestjs/common';
import UserService from './user.service';
import UserController from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from 'src/type-orm/entity/user-entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule {}
