import {Body, Post, Route, Tags} from 'tsoa';
import {
  CalculateInvoiceRequest,
  CalculateInvoiceResponse,
} from '../types/requestResponses';
import {MESSAGES} from '../utils/messages';
import {} from "../repositories/invoiceRepository";
import {hashPassword} from "../utils/hashUtils";
import { calculateInvoiceService } from '../services/invoiceService';

@Route('/login')
@Tags('Login')
export class InvoiceController {
  @Post('/')
  public async calculateInvoice(
    @Body()
    body: CalculateInvoiceRequest,
  ): Promise<CalculateInvoiceResponse> {
    //TODO add validator to check input data
    return calculateInvoiceService()
  }


}
