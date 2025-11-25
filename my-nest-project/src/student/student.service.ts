import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 22 },
    { id: 3, name: 'Jim Beam', age: 28 },
    { id: 4, name: 'Jill Doe', age: 24 },
    { id: 5, name: 'Jack Doe', age: 26 },
  ];

  getAllStudents() {
    return this.students;
  }

  createStudent(name: string, age: number) {
    const newStudent = { id: this.students.length + 1, name, age };
    this.students.push(newStudent);
    return newStudent;
  }

  getStudentById(id: number) {
    const result = this.students.find((student) => student.id === id);
    if (!result) throw new NotFoundException('Student not found');
    return result;
  }

  updateStudent(id: number, name: string, age: number) {
    const student = this.students.find((student) => student.id === id);
    if (student && student.name) student.name = name;
    if (student && student.age) student.age = age;
    return student;
  }

  deleteStudent(id: number) {
    const students = this.students.filter((student) => student.id !== id);
    this.students = students;
    return this.students;
  }
}
