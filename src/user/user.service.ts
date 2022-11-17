import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async registerUser(registerRes) {
    const { password } = registerRes;
    const hashpassword = await bcrypt.hash(password, 10);
    registerRes.password = hashpassword;
    try {
      return this.userRepo.save(registerRes);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
  async loginuser(credential) {
    const { password, email } = credential;
    const repouser = await this.userRepo.findOneBy({ email });
    if (!repouser) {
      throw new UnauthorizedException('invalid credential');
    }
    const isPasswordmatch = await bcrypt.compare(password, repouser.password);  
  }
}
