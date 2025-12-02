/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schema/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schema/profile.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async createEmployee(payload: any): Promise<Employee> {
    const createdProfile = await this.profileModel.create({
      name: payload.name,
      age: payload.age,
    });

    const createdEmployee = await this.employeeModel.create({
      ...payload,
      profile: createdProfile._id,
    });

    const result = await this.employeeModel
      .findById((createdEmployee as any)._id)
      .populate('profile');

    if (!result) {
      throw new Error('Employee not found');
    }

    return result;
  }
}
