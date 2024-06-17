function Entity(): (target: typeof Food) => void | typeof Food {
    throw new Error("Function not implemented.");
}
import { Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    food_name:string;
    @Column()
    description:string;
    @Column()
    price:number;
    @Column()
    type:string;
    @Column({default:true})
    is_active:boolean;
}

