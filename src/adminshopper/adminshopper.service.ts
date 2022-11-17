import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminShopper } from './adminshopper.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminshopperService {
  constructor(
    @InjectRepository(AdminShopper)
    private adminShopper: Repository<AdminShopper>,
    private jwt: JwtService,
  ) {}

  async registerAdminShopper(adminshopper) {
    const { password } = adminshopper;
    const hashedPassword = await bcrypt.hash(password, 10);

    adminshopper.password = hashedPassword;
    this.adminShopper.create(adminshopper);
    try {
      return await this.adminShopper.save(adminshopper);
    } catch {
      throw new InternalServerErrorException(
        'Somthing went wrong admin shopper',
      );
    }
  }

  async loginAdminShopper(credentials) {
    const { email, password } = credentials;
    const adminShopper = await this.adminShopper.findOneBy({ email });
    if (!adminShopper) {
      throw new UnauthorizedException('Invalid credential');
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      adminShopper.password,
    );
    if (isPasswordMatch) {
      const jwtPayload = { email };
      const token = await this.jwt.signAsync(jwtPayload, {
        expiresIn: '1d',
        algorithm: 'HS512',
      });
      return { adminShopper: adminShopper, token: token };
    } else {
      throw new UnauthorizedException('Invalid credential');
    }
  }
}
