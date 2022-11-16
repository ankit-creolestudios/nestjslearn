import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

export class ProductReview {
  @PrimaryGeneratedColumn()
  reviewId: string;
  @Column()
  description: string;
  @ManyToOne((type) => Product, (product) => product.productReview)
  product: Product;
}
