import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customers } from './entity/customer';

@Module({
  imports: [TypeOrmModule.forFeature([Customers])],
  providers: [CustomerService],
  controllers: [CustomerController],
  exports: [CustomerModule]

})
export class CustomerModule {}
