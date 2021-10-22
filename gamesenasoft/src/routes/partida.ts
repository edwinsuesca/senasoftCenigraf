import { Router } from "express";
import { PartidaController } from "../controller/Partida.controller";



const router = Router();

router.post('/', PartidaController.newGame);
router.get('/:codPartida', PartidaController.getGameId);
router.get('/', PartidaController.getGames);


export default router;