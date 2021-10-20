import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import { Jugador } from "./Jugadores";

@Entity()
export class Partida {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @Column()
    creator: string;

    @Column()
    players: string;

    @Column()
    winner: string;

    @Column()
    turn: string;

    @ManyToMany(()=>Jugador, jugador=>jugador.partidas)
    jugadores:Jugador[];



}
