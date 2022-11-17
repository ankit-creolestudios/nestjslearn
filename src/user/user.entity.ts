import { ProductReview } from 'src/product/product-review.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from './address.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  mobile: string;
  @Column()
  password: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany((type) => Address, (address) => address.user)
  address: Address[];
  @OneToMany((type) => ProductReview, (review) => review.user)
  productReview: ProductReview[];
}
