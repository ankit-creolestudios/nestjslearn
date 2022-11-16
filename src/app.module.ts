import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AdminshopperModule } from './adminshopper/adminshopper.module';
import { AdminShopper } from './adminshopper/adminshopper.entity';
import { Address } from './user/address.entity';
import { User } from './user/user.entity';
import { ProductCategory } from './product/productcategory.entity';
import { ProductReview } from './product/product-review.entity';
const dotenv = require('dotenv');
dotenv.config();
@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Creole@123',
      database: 'nestjsrevis',
      entities: [
        Product,
        AdminShopper,
        Address,
        User,
        ProductCategory,
        ProductReview,
      ],
      synchronize: true,
    }),
    UserModule,
    AdminshopperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
