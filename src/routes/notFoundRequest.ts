import express, {ErrorRequestHandler, RequestHandler} from "express";

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({error: 'Not Found'});
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json({error: 'Internal Server Error'});
}