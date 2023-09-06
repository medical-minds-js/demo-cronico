import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionRepositoryService } from './subscription-repository.service';
import { SubsciptionController } from './subsciption.controller';
import { subscriptionEntityProviders } from 'src/core/database/entities/subscription/subscription-entity.providers';
import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from '../auth/constansts';

@Module({
  controllers: [SubsciptionController],
  providers: [
    SubscriptionService,
    SubscriptionRepositoryService,
    ...subscriptionEntityProviders,
  ],
  imports: [JwtModule.register(jwtOptions)],
})
export class SubscriptionsModule {}
