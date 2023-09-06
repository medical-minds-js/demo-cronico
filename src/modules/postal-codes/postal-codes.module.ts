import { Module } from '@nestjs/common';
import { PostalCodesService } from './postal-codes.service';
import { PostalCodesRepositoryService } from './postal-codes-repository.service';
import { PostalCodesController } from './postal-codes.controller';
import { SharedModule } from 'src/shared/shared/shared.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from '../auth/constansts';
import { postalCodesEntityProviders } from 'src/core/database/entities/postal-codes/postal-codes-entity.providers';

@Module({
  controllers: [PostalCodesController],
  providers: [
    PostalCodesService,
    PostalCodesRepositoryService,
    ...postalCodesEntityProviders,
  ],
  imports: [SharedModule, JwtModule.register(jwtOptions)],
})
export class PostalCodesModule {}
