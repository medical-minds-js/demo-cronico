import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UsersRepositoryService } from '../users/users-repository.service';
import { SharedModule } from 'src/shared/shared/shared.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from './constansts';
import { OpenPayService } from 'src/core/services/open-pay/open-pay.service';
import { AilmentsService } from '../ailments/ailments.service';
import { AilmentsRepositoryService } from '../ailments/ailments-repository.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    UsersRepositoryService,
    OpenPayService,
    AilmentsService,
    AilmentsRepositoryService,
  ],
  exports: [AuthService],
  imports: [SharedModule, JwtModule.register(jwtOptions), SharedModule],
})
export class AuthModule {}
