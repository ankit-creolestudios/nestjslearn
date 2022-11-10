import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheMService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async storeInCache(key, value) {
    console.log(key, value, 'serv');
    return await this.cacheManager.set(key, value);
  }
  async getFromCache(key) {
    console.log(key, 'serv');
    return await this.cacheManager.get(key);
  }
}
