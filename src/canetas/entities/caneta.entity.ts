import { Check, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, Unique, UpdateDateColumn, VersionColumn } from "typeorm";
import { Min, Max } from "class-validator";
import { Fabricante } from "./fabricante.entity";

@Entity()
export class Caneta {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true, length:15})
    name: string;

    @Column({length: 100})
    image: string;

    @Column({type: 'decimal', precision: 5, scale: 2})
    @Min(0)
    @Max(999)
    price: number;

    @ManyToOne(() => Fabricante, fab => fab.canetas)
    fabricante: Fabricante;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

    @DeleteDateColumn()
    delete_date: Date;

    @VersionColumn()
    entity_version: number;
}
