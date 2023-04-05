import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Caneta } from "./caneta.entity";


@Entity()
export class Fabricante {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true, length: 50})
    name: string
    
    @OneToMany(() => Caneta, caneta => caneta.fabricante)
    canetas: Caneta[]
}