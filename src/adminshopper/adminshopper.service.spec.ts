import { Test, TestingModule } from '@nestjs/testing';
import { AdminshopperService } from './adminshopper.service';

describe('AdminshopperService', () => {
  let service: AdminshopperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminshopperService],
    }).compile();

    service = module.get<AdminshopperService>(AdminshopperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
