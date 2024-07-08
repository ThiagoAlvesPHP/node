import express, {RequestHandler} from "express";
import productsRouter from "./products";
import voosRouter from "./voos";
import {login} from "../middlewares/login";

const router = express.Router();

// faz com que todas as rotas abaixo da rota /login use o middleware login
// router.use(login);

router.use('/products', productsRouter);
router.use('/voos', voosRouter);

router.get('/', (req, res) => {
    console.log("PARAMS", req.params);
    console.log("QUERYS", req.query);
    console.log("BODY", req.body);

    res.json({message: 'Hello World!'});
});

router.get('/ping', (req, res) => {
    console.log('Ping')
    res.json({message: 'Pong!'});
});

export default router;
