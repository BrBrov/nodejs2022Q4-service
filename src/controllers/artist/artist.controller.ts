import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArtistDto, Artist } from 'src/models/artist-models';
import { ArtistDTOValidationPipe } from 'src/pipe/artist-pipes/artist-dto';
import ArtistService from './artist.service';
import { UUIDValidationPipe } from 'src/pipe/uuid-validater';

@Controller()
export default class ArtistController {
  constructor(private ctrl: ArtistService) {}

  @Get()
  public async getAllArtists(): Promise<Array<Artist>> {
    return await this.ctrl.getAllArtists();
  }

  @Get(':id')
  public async getArtist(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<Artist> {
    const track = await this.ctrl.getArtist(id);

    if (!track) {
      throw new HttpException('Artist was not found.', HttpStatus.NOT_FOUND);
    }
    return track;
  }

  @Post()
  public async createArtist(
    @Body(ArtistDTOValidationPipe) body: ArtistDto,
  ): Promise<Artist> {
    return await this.ctrl.createArtist(body);
  }

  @Put(':id')
  public async updateArtist(
    @Param('id', UUIDValidationPipe) id: string,
    @Body(ArtistDTOValidationPipe) body: ArtistDto,
  ): Promise<Artist> {
    const track = await this.ctrl.updateArtist(id, body);
    if (!track) {
      throw new HttpException('Artist was not found.', HttpStatus.NOT_FOUND);
    }
    return track;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteArtist(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<void> {
    const result = await this.ctrl.deleteArtist(id);

    if (!result) {
      throw new HttpException('Artist was not found.', HttpStatus.NOT_FOUND);
    }

    return;
  }
}
