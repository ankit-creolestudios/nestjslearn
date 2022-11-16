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

  @ManyToOne((type) => AdminShopper, (admin) => admin.id)
  @JoinColumn({ name: 'admishopper_id' })
  adminShopper: AdminShopper;

  @ManyToOne((type) => ProductCategory, (category) => category.categoryId, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'category_id' })
  category: ProductCategory;
  @OneToMany((type) => ProductReview, (review) => review.product)
  productReview: ProductReview[];
}
