import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}
  async getAll() {
    return await this.productRepository.find();
  }

  async findById(id: string) {
    console.log(id);
    const product = this.productRepository.findOne({ where: { id } });
    if (product) {
      return product;
    } else {
      throw new NotFoundException();
    }
  }
  async create(product: any) {
    const newProduct = await this.productRepository.create(product);
    await this.productRepository.save(newProduct);

    return product;
  }
  async updateProduct(id: string, data: any) {
    await this.productRepository.update({ id }, data);
    return await this.productRepository.findOne({ where: { id } });
  }

  async removeProduct(id: string) {
    const res = await this.productRepository.delete({ id });
    return 'product remov';
  }
}
