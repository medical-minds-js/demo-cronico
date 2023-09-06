import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { CardsRepositoryService } from './cards-repository.service';
import { cardsEntityProviders } from 'src/core/database/entities/cards/cards-entity.providers';
import { SharedModule } from 'src/shared/shared/shared.module';
import { jwtOptions } from '../auth/constansts';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { OpenPayService } from 'src/core/services/open-pay/open-pay.service';

@Module({
  providers: [
    CardsService,
    CardsRepositoryService,
    ...cardsEntityProviders,
    OpenPayService,
  ],
  controllers: [CardsController],
  exports: [CardsService],
  imports: [SharedModule, JwtModule.register(jwtOptions), UsersModule],
})
export class CardsModule {}
