import { Routes } from '@nestjs/core';
import TrackModule from './controllers/track/track.module';
import UserModule from './controllers/user/user.module';
import AlbumModule from './controllers/album/album.module';

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
    ],
  },
];

export default routes;
