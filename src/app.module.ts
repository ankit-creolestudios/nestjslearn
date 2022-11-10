import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheMModule } from './cache-m/cache-m.module';

@Module({
  imports: [CacheMModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
