import { Router } from "express";
import jugador from './jugador';
import partida from './partida';


const router= Router();
router.use('/jugador', jugador);
router.use('/partida', partida);



export default router;