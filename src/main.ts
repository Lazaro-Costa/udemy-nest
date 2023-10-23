import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  // Configurar CORS para permitir solicitações do seu frontend (http://127.0.0.1:5500)
  app.enableCors({
    // origin: '*',
    origin: 'http://127.0.0.1:5500', //Go Live
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Se você precisar de cookies ou autenticação
  });

  await app.listen(3000);
}
bootstrap();
