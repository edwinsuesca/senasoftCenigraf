import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Jugador } from "./Jugadores";

@Entity()
export class Pregunta {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pregunta: string;

    @ManyToOne(()=>Jugador, jugador=>jugador.preguntas)
    jugador:Jugador;

}