import { Module } from '@nestjs/common';
import { AilmentsService } from './ailments.service';
import { AilmentsRepositoryService } from './ailments-repository.service';
import { ailmentEntityProviders } from 'src/core/database/entities/ailments/ailment-entity.providers';
import { AilmentsController } from './ailments.controller';

@Module({
  controllers: [AilmentsController],
  providers: [
    AilmentsService,
    AilmentsRepositoryService,
    ...ailmentEntityProviders,
  ],
  exports: [AilmentsService],
})
export class AilmentsModule {}
