import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ExceptionController } from './exception/exception.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController, ExceptionController],
  providers: [AppService],
})
export class AppModule {}
