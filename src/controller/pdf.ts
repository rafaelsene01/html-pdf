import { Body, Controller, Post, Res } from '@nestjs/common';
import * as html_to_pdf from 'html-pdf-node';
import Handlebars from 'handlebars';
import * as fs from 'fs';

import { PDFDto } from 'src/validators/PDF';

@Controller('/pdf')
export class PDFController {
  @Post()
  async htmlToPDF(@Body() data: PDFDto, @Res() res) {
    const compiledTemplate = await fs.readFileSync('src/views/pdf.hbs', {
      encoding: 'utf8',
    });
    const template = Handlebars.compile(compiledTemplate);
    const options = {
      format: 'A4',
    };
    const file = { content: template(data) };

    const pdfBuffer = await html_to_pdf.generatePdf(file, options);

    if (pdfBuffer) {
      fs.writeFileSync('document.pdf', pdfBuffer);
      const pdf = fs.readFileSync('document.pdf');
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
      res.send(pdf);
    }

    res.status(400).send('Não foi possivel gerar o documento');

    // return res.render('pdf.hbs', data);
  }
}
