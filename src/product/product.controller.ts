import { Controller, Get, Req , UseInterceptors, CacheInterceptor, CacheTTL,Inject, CACHE_MANAGER} from '@nestjs/common';
import { memoryStore } from 'cache-manager';
import { Request } from 'express';
import { ProductsService } from './product.service';
//displays the details of the products
@Controller('product')
export class ProductController {
  randomNumDbs = Math.floor(Math.random() * 10);
  memoryCache = memoryStore({ttl:10000})
  constructor(private productsService: ProductsService) {}

  // @Get('redis')
  // async hello() {
  //   return this.productsService.getHello();
  // }

  //http://localhost:3000/product
  //this method takes query as an input for all the following filter methods
  // @UseInterceptors(CacheInterceptor)
  // @CacheTTL(30)
  
  @Get('cache')
  async setNumber() {
    const val = await this.memoryCache.get('number');
    if (val) {
      return {
        data: val,
        FromRedis: 'this is loaded from redis cache',
      };
    }
    if (!val) {
      await this.memoryCache.set('number', this.randomNumDbs);
      return {
        data: this.randomNumDbs,
        FromRandomNumDbs: 'this is loaded from randomNumDbs',
      };
    }
  }

  @Get()
  async getDetailsOfProducts(@Req() req: Request) {

    //variable is used to build the query
    const builder = this.productsService.queryBuilder('Product');

    //add rating for the product in the query
    try {
      if (req.query.rating) {
        builder.where('Product.rating LIKE :rating', {
          rating: `%${req.query.rating}%`,
        });
      }
    } catch (error) {
      return (
        ' an error happened... please try again later... the error is ' + error
      );
    }

    //add product name  for the product in the query for the filter
    try {
      if (req.query.name) {
        builder.where('Product.productName LIKE :name', {
          name: `%${req.query.name}%`,
        });
      }
    } catch (error) {
      return (
        'an error happened... please try again later... the error is ' + error
      );
    }


    //add product model  for the product in the query for the filter
    try {
      if (req.query.model) {
        builder.where('Product.productModel LIKE :model', {
          model: `%${req.query.model}%`,
        });
      }
    } catch (error) {
      return (
        'an error happened... please try again later... the error is ' + error
      );
    }


    //add product type like Phone. Tablet  for the product in the query for the filter
    try {
      if (req.query.type) {
        builder.where('Product.type LIKE :type', {
          type: `%${req.query.type}%`,
        });
      }
    } catch (error) {
      return (
        'an error happened... please try again later... the error is ' + error
      );
    }


    //sort the product based  on decending order (desc) or ascending order  (asc)
    try {
      const sort: any = req.query.sort;
      if (sort) {
        builder.orderBy('Product.productPrice', sort.toUpperCase());
      }
    } catch (error) {
      return (
        'an error happened... please try again later... the error is ' + error
      );
    }


    //pagination for the api
    try {
      const page: number = parseInt(req.query.page as any) || 1;
      const perPage = 5;
      builder.offset((page - 1) * perPage).limit(perPage);
      const total = await builder.getCount();
      return {
        data: await (await builder).getMany(),
        page,
        total,
      };
    } catch (error) {
      return (
        'an error happened... please try again later... the error is ' + error
      );
    }
  }
}
