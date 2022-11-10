import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CacheMService } from './cache-m.service';

@Controller('cache-m')
export class CacheMController {
  constructor(private cacheService: CacheMService) {}
  @Post()
  async storeInCahce(@Body() data: string) {
    console.log(data);
    return await this.cacheService.storeInCache('name', data);
  }
  @Get(':key')
  async getFromCache(@Res() response, @Param('key') key: string) {
    const postcachem = await this.cacheService.getFromCache(key);
    console.log(postcachem);
    return postcachem;
  }
}
