import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(public readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Post()
  createUser(@Body() user: { name: string; email: string }) {
    return this.userService.createUser(user.name, user.email);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(parseInt(id));
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(parseInt(id));
  }
}
