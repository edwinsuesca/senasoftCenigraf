import { Router } from "express";
import { PartidaController } from "../controller/Partida.controller";



const router = Router();

router.post('/', PartidaController.newGame);


export default router;