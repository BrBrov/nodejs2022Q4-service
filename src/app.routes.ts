import { Routes } from '@nestjs/core';
import TrackModule from './controllers/track/track.module';
import UserModule from './controllers/user/user.module';
import AlbumModule from './controllers/album/album.module';
import ArtistModule from './controllers/artist/artist.module';
import FavoritesModule from './controllers/favorite/favorite.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users',
        module: UserModule,
      },
      {
        path: 'tracks',
        module: TrackModule,
      },
      {
        path: 'albums',
        module: AlbumModule,
      },
      {
        path: 'artists',
        module: ArtistModule,
      },
      {
        path: 'favs',
        module: FavoritesModule,
      },
    ],
  },
];

export default routes;
