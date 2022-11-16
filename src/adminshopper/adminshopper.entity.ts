import { Product } from 'src/product/product.entity';
import { Address } from 'src/user/address.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  Entity,
} from 'typeorm';
@Entity()
export class AdminShopper {
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
  @OneToMany((type) => Address, (address) => address.id)
  address: Address[];
  @OneToMany((type) => Product, (product) => product.id)
  products: Product[];
}
