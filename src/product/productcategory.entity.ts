import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn()
  categoryId: string;
  @Column()
  categoryName: string;

  @OneToMany((type) => Product, (product) => product.category)
  products: Product[];
}
