import {RequestHandler} from "express";

export const login: RequestHandler = (req, res, next) => {
    let logged = false;
    if (logged) {
        next();
    } else {
        res.sendStatus(401);
    }
}