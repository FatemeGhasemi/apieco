import {NextFunction, Request, Response, Router} from "express";
import {InvoiceController} from "../controllers/invoiceController";
import {sendResponse} from "../utils/responseHandler";

const controller = new InvoiceController()
export const invoiceRouter = Router();

invoiceRouter.get('/invoice', async (req: Request, res: Response, next:NextFunction) => {
    try {
        const response = await controller.calculateInvoice(req.body);
        await sendResponse(res, response)
    } catch (e) {
        next(e)
    }
});