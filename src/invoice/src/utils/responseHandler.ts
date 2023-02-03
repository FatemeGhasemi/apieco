import {Response} from "express";


export const sendResponse = async (res:Response, data: any, statusCode =200)=>{

    res.status(statusCode).send(data)
}