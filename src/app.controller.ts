import { CacheKey, CacheTTL, Controller, Get, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/common/cache';
import { AppService } from './app.service';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  
  @CacheTTL(30)
  async getHello() {
    return this.appService.getHello();
  }
}