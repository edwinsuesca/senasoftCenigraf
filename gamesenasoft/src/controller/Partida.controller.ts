import {getRepository} from "typeorm";
import { Request, Response} from "express";
import {Jugador} from "../entity/Jugadores";
import { Carta } from "../entity/Cartas";
import { Partida } from "../entity/Partida";

const cartasProgramador=["Pedro", "Juan", "Carlos", "Juanita", "Antonia", "Carolina", "Manuel"];
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

        


            if(codPartida===codigo){

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

                const jugadores=[]
                jugadores[jugadores.length]=jugador;

                const game= new Partida();
                game.name= codigoPartida,
                game.jugador=jugadores

                try {
                    await playerRepository.save(jugador);
                    await gameRepository.save(game);
                    res.status(200).json({message:'Game created successfully ' , game});
                } catch (error) {
                    res.status(400).json({message:'Bad code!'})
                }
     
               
            } else {
                return res.status(400).json({message:' Code is incorrect'});
            }
       

       
 
        

    
        
    };

    static getGameId= async (req: Request, res:Response)=>{
        const {codPartida}= req.params;
        //const {codPartida}= req.body;
        const gameRepository= getRepository(Partida);

        try {
            const partida= await gameRepository.findOneOrFail({
                where: {
                    name: codPartida
                }
            });

            

            res.send(partida);
        } catch (error) {
            res.status(404).json({message: ' Not result'});
        }

    };

    static getGames= async (req: Request, res:Response)=>{
        const gameRepository= getRepository(Partida);

        try {
            const game= await gameRepository.find();

            if(game){
               return res.status(200).json(game);
            }else{
              return  res.status(404).json({message: 'Not result'});
            }

        } catch (error) {
          return  res.status(400).json({message:'game not found'});
        }

    }

}