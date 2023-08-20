import { Routes } from '@nestjs/core';
import TrackModule from './controllers/track/track.module';
import UserModule from './controllers/user/user.module';
import AlbumModule from './controllers/album/album.module';
import ArtistModule from './controllers/artist/artist.module';
import FavoritesModule from './controllers/favorite/favorite.module';
import AuthModule from './controllers/authentication/auth.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user',
        module: UserModule,
      },
      {
        path: 'track',
        module: TrackModule,
      },
      {
        path: 'album',
        module: AlbumModule,
      },
      {
        path: 'artist',
        module: ArtistModule,
      },
      {
        path: 'favs',
        module: FavoritesModule,
      },
      {
        path: 'auth',
        module: AuthModule,
      },
    ],
  },
];

export default routes;
