import { Test, TestingModule } from '@nestjs/testing';
import { CacheMController } from './cache-m.controller';

describe('CacheMController', () => {
  let controller: CacheMController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CacheMController],
    }).compile();

    controller = module.get<CacheMController>(CacheMController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
