import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  country: string;

  @Column()
  state: string;
  @Column()
  city: string;

  @Column()
  area: string;

  @Column({ type: 'enum', enum: ['Home', 'Ofice'] })
  addressType: ['Home', 'Ofice'];

  @ManyToOne((type) => User, (user) => user.address)
  user: User;
}
