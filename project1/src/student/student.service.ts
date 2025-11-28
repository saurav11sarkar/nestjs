import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.model';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<StudentDocument>,
  ) {}

  async createStudent(payload: Partial<Student>) {
    const result = await this.studentModel.create(payload);
    if (!result) throw new NotFoundException('Student not found');
    return {
      success: true,
      statuscode: 201,
      message: 'Student created successfully',
      data: result,
    };
  }
}
