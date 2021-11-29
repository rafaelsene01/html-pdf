import { Module } from '@nestjs/common';
import { JoiPipeModule } from 'nestjs-joi';

import { AppController } from 'src/controller';
import { PDFController } from 'src/controller/pdf';

import { AppService } from 'src/service';

@Module({
  imports: [JoiPipeModule],
  controllers: [AppController, PDFController],
  providers: [AppService],
})
export class AppModule {}
