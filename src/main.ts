import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CorsAllowHeaders, ServerPort } from './config';

import { AppModule } from './modules/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    allowedHeaders: CorsAllowHeaders
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(ServerPort);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
