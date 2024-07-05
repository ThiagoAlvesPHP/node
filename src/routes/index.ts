import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
});
router.get('/ping', (req, res) => {
    res.json({message: 'Pong!'});
});

export default router;
