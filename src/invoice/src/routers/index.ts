import express from 'express';
import {invoiceRouter} from "./invoiceRouter";

export const router = express.Router();
router.use('/', invoiceRouter);
