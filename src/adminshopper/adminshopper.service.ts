import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminShopper } from './adminshopper.entity';

@Injectable()
export class AdminshopperService {
  constructor(@InjectRepository(AdminShopper) adminShopper: AdminShopper) {}

  async registerAdminShopper() {
    const newShopper = await this.registerAdminShopper;
  }
}
