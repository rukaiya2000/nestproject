 import { Customers } from "src/customer/entity/customer";
import { Products } from "src/product/entity/product";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class CustomerOrder {
    @PrimaryColumn()
    email: string;

    @PrimaryColumn()
    productId: number;
}