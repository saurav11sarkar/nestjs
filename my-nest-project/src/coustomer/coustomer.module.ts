import { Module } from '@nestjs/common';
import { CoustomerController } from './coustomer.controller';
import { CoustomerService } from './coustomer.service';

@Module({
  controllers: [CoustomerController],
  providers: [CoustomerService],
})
export class CoustomerModule {}
