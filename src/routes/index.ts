import { Router } from "express";
import jugador from './jugador';


const router= Router();
router.use('/jugador', jugador);



export default router;