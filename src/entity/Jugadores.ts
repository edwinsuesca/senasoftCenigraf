import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, JoinColumn, ManyToOne} from "typeorm";
import { Carta } from "./Cartas";
import { Partida } from "./Partida";
import { Pregunta } from "./Preguntas";

@Entity()
export class Jugador {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickname: string;

    @OneToMany(()=>Carta, carta=> carta.jugador)
    cartas: Carta[];

    @OneToMany(()=>Pregunta, pregunta=>pregunta.jugador)
    preguntas:Pregunta[];

     @ManyToOne(()=>Partida, partida=>partida.jugador)
     partida: Partida;





}
