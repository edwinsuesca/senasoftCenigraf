import {getRepository} from "typeorm";
import { Request, Response} from "express";
import {Jugador} from "../entity/Jugadores";
import { Carta } from "../entity/Cartas";
import { Partida } from "../entity/Partida";

const cartasProgramador=["Pedro", "Juan", "Carlos", "Juanita", "Antonio", "Carolina", "Manuel"];
const cartasModulo=["Nomina", "Facturación", "Recibos", "Comprobantes", "Usuarios", "Contabilidad"];
const cartasError=["404", "Stack Overflow", "Memory Out of Range", "Null pointer", "Syntax error", "Encoding error"];


export class PartidaController {

        static newGame= async (req: Request, res:Response) =>{
            const playerRepository= getRepository(Jugador);
            const gameRepository= getRepository(Partida);
            const cardRepository= getRepository(Carta);

            const {codPartida, nickname}= req.body;


            //We generate the hexagesimal
            var simbolos,codigoPartida;
            simbolos = "0123456789ABCDEF";
            codigoPartida='';

            for(var i = 0; i < 6; i++){
                codigoPartida = codigoPartida + simbolos[Math.floor(Math.random() * 16)];
            }
            
            

            const codigo="AB19F5";


        const Indexcarta1= Math.floor(Math.random()*(cartasProgramador.length));
        const carta1= cartasProgramador[Indexcarta1];

        const indexcarta2= Math.floor(Math.random()*(cartasModulo.length));
        const carta2= cartasModulo[indexcarta2];

        const Indexcarta3= Math.floor(Math.random()*(cartasError.length));
        const carta3= cartasError[Indexcarta3];
       
        const cartasP= new Carta();
        cartasP.cartas=carta1;
        

        const cartasM= new Carta();
        cartasM.cartas=carta2;

        const cartasE= new Carta();
        cartasE.cartas=carta3;

        try {
            await cardRepository.save(cartasM);
        } catch (error) {
            res.status(400).json({message: error});
        }
        try {
            await cardRepository.save(cartasE);
        } catch (error) {
            res.status(400).json({message: error});
        }
        try {
            await cardRepository.save(cartasP);
        } catch (error) {
            res.status(400).json({message: error});
        }


        const jugador= new Jugador();
        jugador.nickname= nickname;
        jugador.cartas=[cartasP, cartasE, cartasM];

        try {
            await playerRepository.save(jugador);
            res.status(200).json({message:'Player created successfully ' , codigoPartida});
        } catch (error) {
            res.status(400).json({message:'Bad code!'})
        }


            const jugadores=[]
            jugadores[jugadores.length]=jugador;

            if(codPartida==codigo){
                const game= new Partida();
                game.name= codigoPartida,
                game.jugador=jugadores
     
                await gameRepository.save(game);
            } else {
                res.status(204).json({message:'Incorrect code'})
            }
       

       
 
        

    
        
    }

}