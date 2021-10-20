import {getRepository} from "typeorm";
import { Request, Response} from "express";
import {Jugador} from "../entity/Jugadores";
import { Carta } from "../entity/Cartas";
import { Partida } from "../entity/Partida";

const cartasProgramador=["Pedro", "Juan", "Carlos", "Juanita", "Antonio", "Carolina", "Manuel"];
const cartasModulo=["Nomina", "Facturación", "Recibos", "Comprobantes", "Usuarios", "Contabilidad"];
const cartasError=["404", "Stack Overflow", "Memory Out of Range", "Null pointer", "Syntax error", "Encoding error"];

export class JugadorController {

    static newPlayer= async (req: Request, res: Response) =>{
        const playerRepository= getRepository(Jugador);
        const cardRepository= getRepository(Carta);
        const gameRepository= getRepository(Partida);

        const { nickname, codPartida }= req.body;

        var cProgramador=cartasProgramador;
        var cModulo=cartasModulo;
        var cError=cartasError;
        

        const Indexcarta1= Math.floor(Math.random()*(cartasProgramador.length));
        const carta1= cartasProgramador[Indexcarta1];

        const indexcarta2= Math.floor(Math.random()*(cartasModulo.length));
        const carta2= cartasModulo[indexcarta2];

        const Indexcarta3= Math.floor(Math.random()*(cartasError.length));
        const carta3= cartasError[Indexcarta3];
       // const cartasjugador=[carta1, carta2, carta3];
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




        // if(!(getGame)){
        //     return res.status(400).json({message:'Game not found! '});
        // }

        const partida= await gameRepository.findOneOrFail({
            where: {
                name: codPartida
            }
        })
        
        const jugador= new Jugador();
        jugador.nickname= nickname;
        jugador.cartas=[cartasP, cartasE, cartasM];
        jugador.partida=partida;
        
       
        

        try {
            await playerRepository.save(jugador);

            res.status(200).json({message:'Player created successfully'});
            
        } catch (error) {
            res.status(400).json({message: error})
        }

        
         
    };

    static getPlayer= async (req: Request, res: Response)=>{
        const playerRepository= getRepository(Jugador);

        try {
            const player= await playerRepository.find();

            if(player){
               return res.status(200).json(player);
            }else{
              return  res.status(404).json({message: 'Not result'});
            }

        } catch (error) {
          return  res.status(400).json({message:'Player not found'});
        }
    }

}