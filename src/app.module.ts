import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users',
        module: UserModule,
      },
    ],
  },
];

@Module({
  imports: [UserModule, RouterModule.register(routes)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
