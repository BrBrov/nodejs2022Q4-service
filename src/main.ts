import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT;

  const config = new DocumentBuilder()
    .setTitle('Home library')
    .setDescription('Home library API')
    .setVersion('1.0')
    .addTag('Home library')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app
    .listen(port)
    .then(() => console.log(`Server started on http://localhost:${port}`));
}
bootstrap();
