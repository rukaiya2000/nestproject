import { Customers } from 'src/customer/entity/customer';
import { Products } from 'src/product/entity/product';
import { Repository } from 'typeorm';
import { CustomerOrder } from './entity/order';
export declare class OrderService {
    private customerOrderRepo;
    private customerRepo;
    private productRepo;
    constructor(customerOrderRepo: Repository<CustomerOrder>, customerRepo: Repository<Customers>, productRepo: Repository<Products>);
    getAll(): Promise<CustomerOrder[]>;
    getProduct(email: any, field: string): Promise<any>;
}
