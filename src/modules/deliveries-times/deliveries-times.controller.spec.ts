import { Test, TestingModule } from '@nestjs/testing';
import { DeliveriesTimesController } from './deliveries-times.controller';

describe('DeliveriesTimesController', () => {
  let controller: DeliveriesTimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveriesTimesController],
    }).compile();

    controller = module.get<DeliveriesTimesController>(DeliveriesTimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
