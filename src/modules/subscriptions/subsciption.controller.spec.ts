import { Test, TestingModule } from '@nestjs/testing';
import { SubsciptionController } from './subsciption.controller';

describe('SubsciptionController', () => {
  let controller: SubsciptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubsciptionController],
    }).compile();

    controller = module.get<SubsciptionController>(SubsciptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
