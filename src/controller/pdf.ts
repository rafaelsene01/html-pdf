import { Body, Controller, Post, Render } from '@nestjs/common';
import { PDFDto } from 'src/validators/PDF';

@Controller('/pdf')
export class PDFController {
  @Post()
  @Render('pdf.hbs')
  htmlToPDF(@Body() data: PDFDto) {
    return data;
  }
}
