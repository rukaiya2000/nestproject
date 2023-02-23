import { Repository } from 'typeorm';
import { Customers } from 'src/customer/entity/customer';
export declare class CustomerService {
    private userRepo;
    constructor(userRepo: Repository<Customers>);
}
