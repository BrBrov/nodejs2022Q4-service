import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import routes from './app.routes';
import TrackModule from './controllers/track/track.module';
import UserModule from './controllers/user/user.module';

@Module({
  imports: [UserModule, TrackModule, RouterModule.register(routes)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
