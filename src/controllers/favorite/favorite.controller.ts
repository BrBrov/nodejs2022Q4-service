import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import FavoritesService from './favorite.service';
import { UUIDValidationPipe } from 'src/pipe/uuid-validater';

@Controller()
export default class FavoritesController {
  constructor(private ctrl: FavoritesService) {}

  @Get()
  public async getAllFavorites() {
    return await this.ctrl.getAllFavorites();
  }

  @Post('track/:id')
  public async setTrackToFav(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<string> {
    await this.ctrl.addTrack(id).catch(() => {
      throw new HttpException(
        "Track with id doesn't exist.",
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    });

    return 'Added succesfully';
  }

  @Delete('track/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteTrack(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<string> {
    const result = await this.ctrl.deleteTrack(id);

    if (!result) {
      throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
    }

    return 'Deleted succesfully';
  }

  @Post('album/:id')
  public async setAlbumToFav(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<string> {
    await this.ctrl.addAlbum(id).catch(() => {
      throw new HttpException(
        "Album with id doesn't exist.",
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    });

    return 'Added succesfully';
  }

  @Delete('album/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteAlbum(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<string> {
    const result = await this.ctrl.deleteAlbum(id);

    if (!result) {
      throw new HttpException('Album was not found.', HttpStatus.NOT_FOUND);
    }

    return 'Deleted succesfully';
  }

  @Post('artist/:id')
  public async setArtistToFav(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<string> {
    await this.ctrl.addArtist(id).catch(() => {
      throw new HttpException(
        "Artist with id doesn't exist.",
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    });

    return 'Added succesfully';
  }

  @Delete('artist/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteArtist(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<string> {
    const result = await this.ctrl.deleteArtist(id);

    if (!result) {
      throw new HttpException('Artist was not found.', HttpStatus.NOT_FOUND);
    }

    return 'Deleted succesfully';
  }
}
