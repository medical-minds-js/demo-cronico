import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartControllerController } from './shopping-cart.controller';

describe('ShoppingCartControllerController', () => {
  let controller: ShoppingCartControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingCartControllerController],
    }).compile();

    controller = module.get<ShoppingCartControllerController>(
      ShoppingCartControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
