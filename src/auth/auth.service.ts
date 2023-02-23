import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customers } from 'src/customer/entity/customer';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
    constructor(
    @InjectRepository(Customers) private authRepository: Repository<Customers>) {}
    async loginCustomer(condition: any): Promise<Customers> {
        return this.authRepository.findOneBy(condition);
    }
}

