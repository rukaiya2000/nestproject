import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from '../product/entity/product';
import { Cache, memoryStore } from 'cache-manager';
@Injectable()
export class ProductsService {
   memoryCache = memoryStore({ ttl: 25000 });
  constructor(
    @InjectRepository(Products)
    private productRepo: Repository<Products>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  // public async getHello() {
  //   const data = 'hello world';
  //   const memoryCache = memoryStore({ ttl: 25000 });
  //   await memoryCache.set('cache', data);
  //   return data;
  // }

  queryBuilder(alias: string) {
    try {
      const data = this.productRepo.createQueryBuilder(alias);
      this.memoryCache.set('cache', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
