import { Body, Controller, Get, Post } from '@nestjs/common';
import { adminRegisterType, adminSigninType } from '../types/user';
import { AdminshopperService } from './adminshopper.service';

@Controller('admin')
export class AdminshopperController {
  constructor(private readonly adminService: AdminshopperService) {}

  @Get('')
  admishopper() {
    return 'admin shopper';
  }
  @Post('register')
  adminRegister(@Body() adminShopper: adminRegisterType) {
    return this.adminService.registerAdminShopper(adminShopper);
  }
  @Post('signin')
  adminSignin(@Body() signincredential: adminSigninType) {
    return this.adminService.loginAdminShopper(signincredential);
  }
}
