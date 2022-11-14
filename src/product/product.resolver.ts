import { Query, Args } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query()
  async products() {
    return await this.productService.getAll();
  }
  async product(@Args('id') id: string) {
    return await this.productService.findById(id);
  }
}
