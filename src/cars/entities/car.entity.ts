import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    modelo: string;
    @Column()
    marca: string;
    @Column()
    anio: number;
    @Column()
    procedencia: string;
    @Column()
    imgURL: string;
}
