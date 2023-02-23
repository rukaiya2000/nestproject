import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
export enum Rating{
   zero = '0',
    one ='1',
    two = '2',
    three = '3',
   four = '4',
   five = '5'
  }
@Entity() 
export class Products{
    @PrimaryGeneratedColumn()
    productId: number;

    @Column()
    productName :string;

    @Column()
    productModel :string;

    @Column()
    availibility : number;

    @Column({
      type: "enum",
      enum: Rating
  })
  rating: Rating;

  @Column()
  type: string;

  @Column()
productPrice :number;
}