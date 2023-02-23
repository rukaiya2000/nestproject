import { Request } from 'express';
import { ProductsService } from './product.service';
export declare class ProductController {
    private productsService;
    randomNumDbs: number;
    memoryCache: import("cache-manager").MemoryStore;
    constructor(productsService: ProductsService);
    setNumber(): Promise<{
        data: unknown;
        FromRedis: string;
        FromRandomNumDbs?: undefined;
    } | {
        data: number;
        FromRandomNumDbs: string;
        FromRedis?: undefined;
    }>;
    getDetailsOfProducts(req: Request): Promise<string | {
        data: import("./entity/product").Products[];
        page: number;
        total: number;
    }>;
}
