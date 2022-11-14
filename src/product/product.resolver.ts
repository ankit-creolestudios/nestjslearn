import { Query, Args, Mutation } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query()
  async products() {
    return await this.productService.getAll();
  }
  @Query()
  async product(@Args('id') id: string) {
    return await this.productService.findById(id);
  }
  @Mutation()
  async createProduct(
    @Args('productName') productName: string,
    @Args('productDescription') productDescription: string,
    @Args('price') price: number,
    @Args('isInStock') isInStock: boolean,
    @Args('image') image: string,
  ) {
    const product = {
      productName,
      productDescription,
      price,
      isInStock,
      image,
    };
    return await this.productService.create(product);
  }
  @Mutation()
  async updateProduct(
    @Args('id') id: string,
    @Args('productName') productName: string,
    @Args('productDescription') productDescription: string,
    @Args('price') price: number,
    @Args('isInStock') isInStock: boolean,
    @Args('image') image: string,
  ) {
    const product = {
      productName,
      productDescription,
      price,
      isInStock,
      image,
    };
    return await this.productService.updateProduct(id, product);
  }
  @Mutation()
  async deleteProduct(@Args('id') id: string) {
    return await this.productService.removeProduct(id);
  }
}
