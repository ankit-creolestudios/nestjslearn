import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminShopper } from './adminshopper.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JWTPersonalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(AdminShopper)
    private adminShopper: Repository<AdminShopper>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'rpstbmazvys',
    });
  }

  async validate(credential): Promise<any> {
    const { email } = credential;
    const user = await this.adminShopper.findOneBy({ email });
    if (!user) {
      throw new UnauthorizedException();
    } else {
      return user;
    }
  }
}
