import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CoustomerService } from './coustomer.service';
import { CustomerDto } from './dto/coustomer.dto';

@Controller('coustomer')
export class CoustomerController {
  constructor(private readonly coustomerService: CoustomerService) {}

  @Post()
  createCoustomer(@Body() payload: CustomerDto) {
    return this.coustomerService.createCoustomer(payload);
  }
  @Get()
  getAllCoustomer() {
    return this.coustomerService.getAllCoustomer();
  }
  @Get(':id')
  getCoustomerById(@Param('id') id: string) {
    return this.coustomerService.getCoustomerById(parseInt(id));
  }

  @Delete(':id')
  deleteCoustomer(@Param('id') id: string) {
    return this.coustomerService.deleteCoustomer(parseInt(id));
  }
}
