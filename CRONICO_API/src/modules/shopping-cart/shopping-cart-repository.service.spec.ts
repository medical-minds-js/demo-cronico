import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartRepositoryService } from './shopping-cart-repository.service';

describe('ShoppingCartRepositoryService', () => {
  let service: ShoppingCartRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingCartRepositoryService],
    }).compile();

    service = module.get<ShoppingCartRepositoryService>(
      ShoppingCartRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
