import { Test, TestingModule } from '@nestjs/testing';
import { PostalCodesRepositoryService } from './postal-codes-repository.service';

describe('PostalCodesRepositoryService', () => {
  let service: PostalCodesRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostalCodesRepositoryService],
    }).compile();

    service = module.get<PostalCodesRepositoryService>(PostalCodesRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
