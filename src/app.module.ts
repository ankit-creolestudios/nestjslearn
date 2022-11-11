import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [RecipesModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
