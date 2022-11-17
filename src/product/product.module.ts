import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/user/address.entity';
import { ProductReview } from './product-review.entity';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ProductCategory } from './productcategory.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductReview, ProductCategory]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
