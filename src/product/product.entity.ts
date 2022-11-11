import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ name: 'productName' })
  productName: string;
  @Column({ name: 'productDescription', nullable: true })
  productDescription: string;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'isInStock' })
  isInStock: boolean;
  @Column({ name: 'image', length: 2083 })
  image: string;
}
