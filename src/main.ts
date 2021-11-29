import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { join } from 'path';
import handlebars from 'handlebars';

import { AppModule } from 'src/module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useStaticAssets({
    root: join(__dirname, '..', 'src', 'views', 'css'),
    prefix: '/css/',
  });
  app.setViewEngine({
    engine: {
      handlebars,
    },
    templates: join(__dirname, '..', 'src', 'views'),
  });

  await app.listen(5000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
