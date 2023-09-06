import { Test, TestingModule } from '@nestjs/testing';
import { PostalCodesService } from './postal-codes.service';

describe('PostalCodesService', () => {
  let service: PostalCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostalCodesService],
    }).compile();

    service = module.get<PostalCodesService>(PostalCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
