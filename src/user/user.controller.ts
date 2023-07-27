import { Controller, Get, Param } from '@nestjs/common';
import UserService from './user.service';

@Controller()
export default class UserController {
  constructor(private userDB: UserService) {}

  @Get(':id')
  retUsers(@Param('id') id: string) {
    console.log(id);
    return this.userDB.getUsers();
  }
}
