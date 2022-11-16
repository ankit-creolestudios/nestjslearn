import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
export class ProductCategory {
  @PrimaryGeneratedColumn()
  categoryId: string;
  @Column()
  categoryName: string;

  @OneToMany((type) => Product, (product) => product.id)
  products: Product[];
}
