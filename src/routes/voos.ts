import express  from "express";

const router = express.Router();

// exemplo de rota dinamica http://localhost:3000/voos/x/y
router.get('/:from/:to', (req, res) => {
    let {from, to} = req.params;

    console.log("PARAMS", req.params);
    console.log("QUERYS", req.query);
    console.log("BODY", req.body);

    res.json({
        flight: {
            from: from.toUpperCase(),
            to: to.toUpperCase()
        }
    });
});

export default router;