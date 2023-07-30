import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { Artist, ArtistDto } from 'src/database/models/artist-models';
import { ArtistDTOValidationPipe } from 'src/pipe/artist-pipes/artist-dto';
import { UUIDValidationPipe } from 'src/pipe/uuid-validater';
import ArtistService from './artist.service';

@Controller()
export default class ArtistController {
  constructor(private ctrl: ArtistService) {}

  @Get()
  public getAllArtists(): Array<Artist> {
    return this.ctrl.getAllArtists();
  }

  @Get(':id')
  public getArtist(@Param('id', UUIDValidationPipe) id: string): Artist {
    const track = this.ctrl.getArtist(id);

    if (!track) {
      throw new HttpException('Artist was not found.', HttpStatus.NOT_FOUND);
    }

    return track;
  }

  @Post()
  public createArtist(@Body(ArtistDTOValidationPipe) body: ArtistDto): Artist {
    return this.ctrl.createArtist(body);
  }

  @Put(':id')
  public updateArtist(
    @Param('id', UUIDValidationPipe) id: string,
    @Body(ArtistDTOValidationPipe) body: ArtistDto,
  ): Artist {
    const track = this.ctrl.updateArtist(id, body);

    if (!track) {
      throw new HttpException('Artist was not found.', HttpStatus.NOT_FOUND);
    }

    return track;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public deleteArtist(@Param('id', UUIDValidationPipe) id: string): void {
    const result = this.ctrl.deleteArtist(id);

    if (!result) {
      throw new HttpException('Artist was not found.', HttpStatus.NOT_FOUND);
    }

    return;
  }
}
