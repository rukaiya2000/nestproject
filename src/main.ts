import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from '../node_modules/compression';
import { INestApplication, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  //added gzip compression
  app.use(compression({
    filter: () => { return true },
    threshold: 0
  }));
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true,
    })
  );
  await app.listen(3000);
}
bootstrap();
