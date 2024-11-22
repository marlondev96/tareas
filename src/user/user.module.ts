import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolver } from './user.resolver';

@Module({
  controllers: [UserController],
  providers: [UserService,UserResolver],
  imports: [
    AuthModule,
    PrismaModule,
    
  ],
  exports: []
})
export class UserModule {}
