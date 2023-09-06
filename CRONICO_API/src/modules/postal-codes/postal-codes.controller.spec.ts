import { Test, TestingModule } from '@nestjs/testing';
import { PostalCodesController } from './postal-codes.controller';

describe('PostalCodesController', () => {
  let controller: PostalCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostalCodesController],
    }).compile();

    controller = module.get<PostalCodesController>(PostalCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
