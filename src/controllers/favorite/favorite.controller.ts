import { Controller } from '@nestjs/common';
import FavoritesService from './favorite.service';

@Controller()
export default class FavoritesController {
  constructor(private ctrl: FavoritesService) {}

  // @Get()
  // public getAllFavorites(): FavoritesResponse {
  //   return this.ctrl.getAllFavorites();
  // }

  // @Post('track/:id')
  // public setTrackToFav(@Param('id', UUIDValidationPipe) id: string): string {
  //   const result = this.ctrl.addTrack(id);

  //   if (!result) {
  //     throw new HttpException(
  //       "Track with id doesn't exist.",
  //       HttpStatus.UNPROCESSABLE_ENTITY,
  //     );
  //   }

  //   return 'Added succesfully';
  // }

  // @Delete('track/:id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // public deleteTrack(@Param('id', UUIDValidationPipe) id: string): string {
  //   const result = this.ctrl.deleteTrack(id);

  //   if (!result) {
  //     throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
  //   }

  //   return 'Deleted succesfully';
  // }

  // @Post('album/:id')
  // public setAlbumToFav(@Param('id', UUIDValidationPipe) id: string): string {
  //   const result = this.ctrl.addAlbum(id);

  //   if (!result) {
  //     throw new HttpException(
  //       "Album with id doesn't exist.",
  //       HttpStatus.UNPROCESSABLE_ENTITY,
  //     );
  //   }

  //   return 'Added succesfully';
  // }

  // @Delete('album/:id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // public deleteAlbum(@Param('id', UUIDValidationPipe) id: string): string {
  //   const result = this.ctrl.deleteAlbum(id);

  //   if (!result) {
  //     throw new HttpException('Album was not found.', HttpStatus.NOT_FOUND);
  //   }

  //   return 'Deleted succesfully';
  // }

  // @Post('artist/:id')
  // public setArtistToFav(@Param('id', UUIDValidationPipe) id: string): string {
  //   const result = this.ctrl.addArtist(id);

  //   if (!result) {
  //     throw new HttpException(
  //       "Artist with id doesn't exist.",
  //       HttpStatus.UNPROCESSABLE_ENTITY,
  //     );
  //   }

  //   return 'Added succesfully';
  // }

  // @Delete('artist/:id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // public deleteArtist(@Param('id', UUIDValidationPipe) id: string): string {
  //   const result = this.ctrl.deleteArtist(id);

  //   if (!result) {
  //     throw new HttpException('Artist was not found.', HttpStatus.NOT_FOUND);
  //   }

  //   return 'Deleted succesfully';
  // }
}
