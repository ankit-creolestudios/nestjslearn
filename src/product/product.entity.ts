import { AdminShopper } from 'src/adminshopper/adminshopper.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductReview } from './product-review.entity';
import { ProductCategory } from './productcategory.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
  @Column()
  quantity: number;

  @Column({ default: 0 })
  rating: number;

  @ManyToOne((type) => AdminShopper, (admin) => admin.products, {
    cascade: ['insert', 'update'],
  })
  adminShopper: AdminShopper;

  @ManyToOne((type) => ProductCategory, (category) => category.products, {
    cascade: ['insert', 'update'],
  })
  category: ProductCategory;
  @OneToMany((type) => ProductReview, (review) => review.product, {
    cascade: ['insert', 'update'],
  })
  productReview: ProductReview[];
}
