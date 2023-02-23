import { Module} from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { Customers } from './customer/entity/customer';
import { CustomerOrder } from './order/entity/order';
import { Products } from './product/entity/product';
import { CacheModule, CacheInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
const redisStore = require("cache-manager-redis-store");
//import { APP_INTERCEPTOR } from '@nestjs/core';
dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.SQL_HOST,
      port: +process.env.SQL_PORT,
      username: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DATABASE,
      entities: [Products, Customers, CustomerOrder]
    }),
    ProductModule,
    CustomerModule,
    OrderModule,
    AuthModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore, 
      socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
      }
      }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
 ]
})
export class AppModule {}
