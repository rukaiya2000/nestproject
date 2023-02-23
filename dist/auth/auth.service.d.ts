import { Customers } from 'src/customer/entity/customer';
import { Repository } from 'typeorm';
export declare class AuthService {
    private authRepository;
    constructor(authRepository: Repository<Customers>);
    loginCustomer(condition: any): Promise<Customers>;
}
