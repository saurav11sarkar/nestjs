import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './user.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private users: IUser[] = [];

  createUser(payload: UserDto): IUser {
    const newUser: IUser = {
      id: this.users.length + 1,
      ...payload,
    };
    this.users.push(newUser);
    if (!newUser) throw new NotFoundException('User not created');
    return newUser;
  }

  getAllUser(): IUser[] {
    return this.users;
  }

  getUser(id: number): IUser {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
