import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';
import { Customers } from 'src/customer/entity/customer';
import { Products } from 'src/product/entity/product';
import { ProductModule } from 'src/product/product.module';
import { CustomerOrder } from './entity/order';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
    imports: [TypeOrmModule.forFeature([CustomerOrder,Customers, Products]), CustomerModule,ProductModule],
    providers: [OrderService],
    controllers: [OrderController],
    exports: [OrderModule]
})
export class OrderModule {}
