import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT;
  await app
    .listen(port)
    .then(() => console.log(`Server started on http://localhost:${port}`));
}
bootstrap();
