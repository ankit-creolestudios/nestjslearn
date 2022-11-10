import { CacheModule, CACHE_MANAGER, Module } from '@nestjs/common';
import { CacheMService } from './cache-m.service';
import { CacheMController } from './cache-m.controller';

@Module({
  imports: [CacheModule.register()],
  providers: [CacheMService],
  controllers: [CacheMController],
})
export class CacheMModule {}
