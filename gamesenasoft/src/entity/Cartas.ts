import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Jugador } from "./Jugadores";

@Entity()
export class Carta {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cartas: string;




    @ManyToOne(()=>Jugador, jugador=>jugador.cartas)
    jugador:Jugador;



}
