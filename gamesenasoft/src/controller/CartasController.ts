import {getRepository} from "typeorm";
import { Request, Response} from "express";

import { Carta } from "../entity/Cartas";

export class CartasController {

    static newCard= async (req: Request, res: Response) =>{
 
        const cardRepository= getRepository(Carta);

        const cartasProgramador=["Pedro", "Juan", "Carlos", "Juanita", "Antonia", "Carolina", "Manuel"]
        const cartasModulo=["Nomina", "Facturación", "Recibos", "Comprobantes", "Usuarios", "Contabilidad"]
        const cartasError=["404", "Stack Overflow", "Memory Out of Range", "Null pointer", "Syntax error", "Encoding error"]



        
    }

}