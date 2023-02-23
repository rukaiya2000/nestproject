import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customers } from 'src/customer/entity/customer';
import { Products } from 'src/product/entity/product';
import { Repository } from 'typeorm';
import { CustomerOrder } from './entity/order';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(CustomerOrder)
    private customerOrderRepo: Repository<CustomerOrder>,
    @InjectRepository(Customers)
    private customerRepo: Repository<Customers>,
    @InjectRepository(Products)
    private productRepo: Repository<Products>,
  ) {}
  getAll() {
    return this.customerOrderRepo.find();
  }

  async getProduct(email: any, field: string) {
    try {
      const productId = await this.customerOrderRepo.find({
        select: {
          productId: true,
        },
        where: {
          email: email,
        },
      });
      //fetching the product details for the given email
      const productDetail = await this.productRepo.find({
        select: {
          productId: field.includes('productId'),
          productName: field.includes('productName'),
          productModel: field.includes('productModel'),
          productPrice: field.includes('productPrice'),
          availibility: field.includes('availability'),
          rating: field.includes('rating'),
          type: field.includes('type'),
        },
        where: {
          productId: productId[0].productId,
        },
      });
      const customerDetail = await this.customerRepo.find({
        select: {
          customerID: field.includes('customerID'),
          name: field.includes('name')
        },
        where: {
          email: email,
        },
      });
      const res = {
        success: true,
        message: 'statement executed successfully',
        data: {
          customerDetail: customerDetail[0].customerID,
          productDetail: productDetail
        },
      };
      return res;
    }
     catch (err) {
      return err;
    }
  }
}
