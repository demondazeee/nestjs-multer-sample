import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    _id: string

    @Column({type: 'bytea'})
    avatar: Buffer
}