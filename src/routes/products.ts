import express  from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({products: ['Camiseta', 'Calça', 'Sapato', 'Tênis']});
});

export default router;