import { Controller, Post, Body, Get, UseGuards, Param } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { UppercasePipe } from 'src/pipe/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RoleGuard } from 'src/guards/role/role.guard';
import { Roles } from 'src/guards/role/role.decorator';
import { ERole } from 'src/guards/role/role.enums';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body(new UppercasePipe()) paylod: UserDto) {
    return this.userService.createUser(paylod);
  }

  @Get()
  @UseGuards(AuthGuard)
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get(':id')
  @UseGuards(RoleGuard)
  @Roles(ERole.ADMIN)
  getUser(@Param('id') id: string) {
    return this.userService.getUser(+id);
  }
}
