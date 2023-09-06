import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersRepositoryService } from './users-repository.service';
import { UsersService } from './users.service';
import { SharedModule } from 'src/shared/shared/shared.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from '../auth/constansts';
import { OpenPayService } from 'src/core/services/open-pay/open-pay.service';
import { UserAilmentsEntity } from 'src/core/database/entities/user-ailments/user-ailments.entity';
import { AilmentsService } from '../ailments/ailments.service';
import { AilmentsRepositoryService } from '../ailments/ailments-repository.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersRepositoryService,
    OpenPayService,
    UserAilmentsEntity,
    AilmentsService,
    AilmentsRepositoryService,
  ],
  imports: [SharedModule, JwtModule.register(jwtOptions), SharedModule],
  exports: [UsersService],
})
export class UsersModule {}
