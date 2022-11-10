import { Test, TestingModule } from '@nestjs/testing';
import { CacheMService } from './cache-m.service';

describe('CacheMService', () => {
  let service: CacheMService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheMService],
    }).compile();

    service = module.get<CacheMService>(CacheMService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
