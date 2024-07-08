import express  from "express";

const router = express.Router();

router.get('/', (req, res) => {
    console.log("PARAMS", req.params);
    console.log("QUERYS", req.query);
    console.log("BODY", req.body);

    res.json({products: ['Camiseta', 'Calça', 'Sapato', 'Tênis']});
});

router.post('/', (req, res) => {
    console.log("PARAMS", req.params);
    console.log("QUERYS", req.query);
    console.log("BODY", req.body);

    res.json({products: []});
});

export default router;