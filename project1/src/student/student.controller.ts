import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() data: Partial<Student>) {
    return await this.studentService.createStudent(data);
  }
}
