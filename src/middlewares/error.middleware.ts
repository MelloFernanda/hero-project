import { NextFunction, Request, Response } from "express"
import { HttsException } from "../interfaces/HttpExceptions"

export function errorMiddleware(
    err: HttsException, req:Request, res: Response, next: NextFunction){
    const status: number = err.status ?? 500;
    const message: string = err.message ?? 'Internal server error';

    res.status(status).json({
        status,
        message,
    })
}