import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminshopperController } from './adminshopper.controller';
import { AdminShopper } from './adminshopper.entity';
import { AdminshopperService } from './adminshopper.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdminShopper])],
  controllers: [AdminshopperController],
  providers: [AdminshopperService],
})
export class AdminshopperModule {}
