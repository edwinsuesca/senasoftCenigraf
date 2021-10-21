import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable, JoinColumn, OneToOne} from "typeorm";
import { Jugador } from "./Jugadores";

@Entity()
export class Partida {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;




    @OneToMany(()=> Jugador, jugador=>jugador.partida)
    @JoinColumn()
    jugador: Jugador[];



}
