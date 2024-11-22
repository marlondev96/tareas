import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ControllerController } from './controller/controller.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController, ControllerController],
  providers: [AppService],
})
export class AppModule {}
