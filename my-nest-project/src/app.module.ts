import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CoustomerModule } from './coustomer/coustomer.module';
import { MyNameController } from './my-name/my-name.controller';

@Module({
  imports: [UserModule, CategoryModule, StudentModule, CoustomerModule],
  controllers: [AppController, MyNameController],
  providers: [AppService],
})
export class AppModule {}
