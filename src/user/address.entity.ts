import { Column, PrimaryGeneratedColumn } from 'typeorm';
class Address {
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
}
