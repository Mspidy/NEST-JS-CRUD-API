import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user_info'})
export class UserEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true})
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

}