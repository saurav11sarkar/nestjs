import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(payload: UserDto) {
    const result = await this.userModel.create(payload);
    if (!result) throw new Error('User not created');
    return {
      statusCode: 201,
      success: true,
      message: 'User created successfully',
      data: result,
    };
  }

  async getAllUsers() {
    const result = await this.userModel.find().exec();
    return {
      statusCode: 200,
      success: true,
      message: 'Users fetched successfully',
      data: result,
    };
  }

  async getUserById(id: string) {
    const result = await this.userModel.findById(id);
    return {
      statusCode: 200,
      success: true,
      message: 'User fetched successfully',
      data: result,
    };
  }

  async updateUser(id: string, payload: UserDto) {
    const result = await this.userModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    return {
      statusCode: 200,
      success: true,
      message: 'User updated successfully',
      data: result,
    };
  }

  async deleteUser(id: string) {
    const result = await this.userModel.findByIdAndDelete(id);
    return {
      statusCode: 200,
      success: true,
      message: 'User deleted successfully',
      data: result,
    };
  }
}
