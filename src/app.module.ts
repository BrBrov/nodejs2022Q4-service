import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import routes from './app.routes';
import TrackModule from './controllers/track/track.module';
import UserModule from './controllers/user/user.module';
import AlbumModule from './controllers/album/album.module';
import ArtistModule from './controllers/artist/artist.module';
import FavoritesModule from './controllers/favorite/favorite.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import postgreConfig from './type-orm/db-config';
import AuthModule from './controllers/authentication/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(postgreConfig),
    UserModule,
    TrackModule,
    AlbumModule,
    ArtistModule,
    FavoritesModule,
    AuthModule,
    RouterModule.register(routes),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
