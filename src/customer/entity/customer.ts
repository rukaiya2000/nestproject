import { CustomerOrder } from "src/order/entity/order";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
export enum Gender {
    M= 'M',
    F= 'F',
  }
  
@Entity()
export class Customers {
    @PrimaryGeneratedColumn()
    customerID: string;

    @Column()
    name: string;

    @Column()
    contact:string;

    
    @Column()
    email: string;

   
    @Column({
        type: "enum",
        enum: Gender
    })
    gender: Gender;

    @Column()
    address: string;
    @Column()
    password: string;

}



