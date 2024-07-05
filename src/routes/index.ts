import express from "express";
import productsRouter from "./products";
import voosRouter from "./voos";

const router = express.Router();

router.use('/products', productsRouter);
router.use('/voos', voosRouter);

router.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
});
router.get('/ping', (req, res) => {
    res.json({message: 'Pong!'});
});

export default router;
