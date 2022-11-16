import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/user/address.entity';
import { ProductReview } from './product-review.entity';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Address, ProductReview])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
