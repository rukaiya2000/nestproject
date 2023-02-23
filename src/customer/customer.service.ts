import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from 'src/customer/entity/customer';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(Customers) private userRepo: Repository<Customers>) { }
}


