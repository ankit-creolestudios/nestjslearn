import { Test, TestingModule } from '@nestjs/testing';
import { AdminshopperController } from './adminshopper.controller';

describe('AdminshopperController', () => {
  let controller: AdminshopperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminshopperController],
    }).compile();

    controller = module.get<AdminshopperController>(AdminshopperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
