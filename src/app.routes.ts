import { Routes } from '@nestjs/core';
import TrackModule from './controllers/track/track.module';
import UserModule from './controllers/user/user.module';

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
    ],
  },
];

export default routes;
