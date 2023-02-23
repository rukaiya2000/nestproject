import { Repository } from 'typeorm';
import { Products } from '../product/entity/product';
import { Cache } from 'cache-manager';
export declare class ProductsService {
    private productRepo;
    private cacheManager;
    memoryCache: import("cache-manager").MemoryStore;
    constructor(productRepo: Repository<Products>, cacheManager: Cache);
    queryBuilder(alias: string): import("typeorm").SelectQueryBuilder<Products>;
}
