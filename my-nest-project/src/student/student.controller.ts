import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Post()
  createStudent(@Body() payload: { name: string; age: number }) {
    return this.studentService.createStudent(payload.name, payload.age);
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    const result = this.studentService.getStudentById(parseInt(id));
    return result;
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() payload: { name: string; age: number },
  ) {
    return this.studentService.updateStudent(
      parseInt(id),
      payload.name,
      payload.age,
    );
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(parseInt(id));
  }
}
