import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "products",synchronize: true})
export class ProductEntity {

    @PrimaryGeneratedColumn({type: "integer", zerofill: false})
    id: string;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    description: string;

    @Column({nullable: false})
    price: number

    @Column({nullable: false})
    unit: string;
}
