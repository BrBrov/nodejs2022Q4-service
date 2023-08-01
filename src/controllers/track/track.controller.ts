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
import { Track, TrackDto } from 'src/database/models/track-models';
import { UUIDValidationPipe } from 'src/pipe/uuid-validater';
import { TrackDTOValidationPipe } from 'src/pipe/track-pipes/track-dto';

@Controller()
export default class TrackController {
  constructor(private ctrl: TrackService) {}

  @Get()
  public getAllTracks(): Array<Track> {
    return this.ctrl.getAllTracks();
  }

  @Get(':id')
  public getTrack(@Param('id', UUIDValidationPipe) id: string): Track {
    const track = this.ctrl.getTrack(id);

    if (!track) {
      throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
    }

    return track;
  }

  @Post()
  public createTrack(@Body(TrackDTOValidationPipe) body: TrackDto): Track {
    return this.ctrl.createTrack(body);
  }

  @Put(':id')
  public updateTrack(
    @Param('id', UUIDValidationPipe) id: string,
    @Body(TrackDTOValidationPipe) body: TrackDto,
  ): Track {
    const track = this.ctrl.updateTrack(id, body);

    if (!track) {
      throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
    }

    return track;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public deleteTrack(@Param('id', UUIDValidationPipe) id: string): void {
    const result = this.ctrl.deleteTrack(id);

    if (!result) {
      throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
    }

    return;
  }
}
