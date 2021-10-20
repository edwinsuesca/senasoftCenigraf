import { Router } from "express";
import { JugadorController } from "../controller/JugadorController";


const router = Router();

router.post('/', JugadorController.newPlayer);
//router.get('/', JugadorController);

export default router;