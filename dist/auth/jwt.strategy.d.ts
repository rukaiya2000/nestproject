import { Customers } from 'src/customer/entity/customer';
import { Repository } from 'typeorm';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private customer;
    constructor(customer: Repository<Customers>);
    validate(payload: {
        email: string;
    }): Promise<{
        email: string;
    }>;
}
export {};
