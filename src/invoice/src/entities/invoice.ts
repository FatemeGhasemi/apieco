import {Schema, model, Document} from "mongoose";

export interface invoiceInterface {
    ip: string;
    url: string;
    method: string;
    body?: any;
    query?: any;
    response?: any;
    statusCode?: number
}

export interface InvoiceMongooseDocument extends invoiceInterface, Document {}

const invoiceSchema = new Schema({
    ip: {type: String, required: true},
    url: {type: String, required: true},
    method: {type: String, required: true},
    body: {type: Object},
    query: {type: Object},
    response: {type: Object},
    statusCode: {type: Number},
}, {
    timestamps: true
})

export const invoiceModel = model<InvoiceMongooseDocument>('invoices', invoiceSchema, "invoice")
