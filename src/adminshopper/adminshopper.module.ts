import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminshopperController } from './adminshopper.controller';
import { AdminShopper } from './adminshopper.entity';
import { AdminshopperService } from './adminshopper.service';
import { JWTPersonalStrategy } from './jwt.stretegy';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminShopper]),
    JwtModule.register({
      secret: 'rpstbmazvys',
      signOptions: {
        algorithm: 'HS512',
        expiresIn: '1d',
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AdminshopperController],
  providers: [AdminshopperService, JWTPersonalStrategy],
  exports: [PassportModule, JWTPersonalStrategy],
})
export class AdminshopperModule {}
