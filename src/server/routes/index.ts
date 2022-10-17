import { Router } from "express";
import { CidadesController } from "../controllers/cidades";

const router = Router();

router.get("/", (req, res) => {
    return res.send('Bem vindo a API!');
});

router.post('/cidades', CidadesController.create);

export { router };