import { Body, Controller, Get, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipe/uppercase/uppercase.pipe';
import { MyNameDto } from './dto/myname.dto';

@Controller('my-name')
export class MyNameController {
  @Get()
  getMyName() {
    return 'My name is [Your Name]';
  }

  @Post()
  createName(@Body(new UppercasePipe()) payload: MyNameDto) {
    return `My name is ${payload.name} and my age is ${payload.age}`;
  }
}
