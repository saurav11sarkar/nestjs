import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  createEmployee(@Body() data: any) {
    return this.studentService.createEmployee(data);
  }
}
