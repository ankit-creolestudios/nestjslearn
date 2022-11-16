import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from './address.entity';

export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  mobile: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @OneToMany((type) => Address, (address) => address.id)
  address: Address[];
}
