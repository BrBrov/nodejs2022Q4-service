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
import AlbumService from './album.service';
import { AlbumDto, Album } from 'src/models/album-models';
import { AlbumDTOValidationPipe } from 'src/pipe/album-pipes/album-dto';
import { UUIDValidationPipe } from 'src/pipe/uuid-validater';

@Controller()
export default class AlbumController {
  constructor(private ctrl: AlbumService) {}

  @Get()
  public async getAllAlbums(): Promise<Array<Album>> {
    return await this.ctrl.getAllAlbums();
  }

  @Get(':id')
  public async getAlbum(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<Album> {
    const track = await this.ctrl.getAlbum(id);
    if (!track) {
      throw new HttpException('Album was not found.', HttpStatus.NOT_FOUND);
    }
    return track;
  }

  @Post()
  public async createAlbum(
    @Body(AlbumDTOValidationPipe) body: AlbumDto,
  ): Promise<Album> {
    return await this.ctrl.createAlbum(body);
  }

  @Put(':id')
  public async updateAlbum(
    @Param('id', UUIDValidationPipe) id: string,
    @Body(AlbumDTOValidationPipe) body: AlbumDto,
  ): Promise<Album> {
    const track = await this.ctrl.updateAlbum(id, body);
    if (!track) {
      throw new HttpException('Album was not found.', HttpStatus.NOT_FOUND);
    }

    return track;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteAlbum(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<void> {
    const result = await this.ctrl.deleteAlbum(id);
    if (!result) {
      throw new HttpException('Album was not found.', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
