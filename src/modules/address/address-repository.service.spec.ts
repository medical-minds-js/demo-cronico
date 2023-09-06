import { Test, TestingModule } from '@nestjs/testing';
import { AddressRepositoryService } from './address-repository.service';

describe('AddressRepositoryService', () => {
  let service: AddressRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressRepositoryService],
    }).compile();

    service = module.get<AddressRepositoryService>(AddressRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
