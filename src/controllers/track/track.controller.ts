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
import TrackService from './track.service';
import { TrackDto, Track } from 'src/models/track-models';
import { TrackDTOValidationPipe } from 'src/pipe/track-pipes/track-dto';
import { UUIDValidationPipe } from 'src/pipe/uuid-validater';

@Controller()
export default class TrackController {
  constructor(private ctrl: TrackService) {}

  @Get()
  public async getAllTracks(): Promise<Array<Track>> {
    return await this.ctrl.getAllTracks();
  }

  @Get(':id')
  public async getTrack(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<Track> {
    const track = await this.ctrl.getTrack(id);

    if (!track) {
      throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
    }

    return track;
  }

  @Post()
  public async createTrack(
    @Body(TrackDTOValidationPipe) body: TrackDto,
  ): Promise<Track> {
    return await this.ctrl.createTrack(body);
  }

  @Put(':id')
  public async updateTrack(
    @Param('id', UUIDValidationPipe) id: string,
    @Body(TrackDTOValidationPipe) body: TrackDto,
  ) {
    const track = await this.ctrl.updateTrack(id, body);

    if (!track) {
      throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
    }

    return track;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteTrack(
    @Param('id', UUIDValidationPipe) id: string,
  ): Promise<void> {
    const result = await this.ctrl.deleteTrack(id);

    if (!result) {
      throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
    }

    return;
  }
}
