import express  from "express";
import {readFile, unlink, writeFile} from "node:fs/promises";

const router = express.Router();

router.get('/', (req, res) => {
    console.log("PARAMS", req.params);
    console.log("QUERYS", req.query);
    console.log("BODY", req.body);

    res.json({data: []});
});

router.post('/', (req, res) => {
    console.log("PARAMS", req.params);
    console.log("QUERYS", req.query);
    console.log("BODY", req.body);

    res.json({data: []});
});

router.delete('/', (req, res) => {
    console.log("PARAMS", req.params);
    console.log("QUERYS", req.query);
    console.log("BODY", req.body);

    res.json({data: []});
});

export default router;