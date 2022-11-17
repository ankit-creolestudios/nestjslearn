import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductReview {
  @PrimaryGeneratedColumn()
  reviewId: string;
  @Column()
  description: string;

  @Column()
  rating: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @ManyToOne((type) => Product, (product) => product.productReview)
  product: Product;
  @ManyToOne((type) => User, (user) => user.productReview)
  user: User;
}
