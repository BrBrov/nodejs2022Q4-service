import { Controller } from '@nestjs/common';
import TrackService from './track.service';

@Controller()
export default class TrackController {
  constructor(private ctrl: TrackService) {}

  // @Get()
  // public getAllTracks(): Array<Track> {
  //   return this.ctrl.getAllTracks();
  // }

  // @Get(':id')
  // public getTrack(@Param('id', UUIDValidationPipe) id: string): Track {
  //   const track = this.ctrl.getTrack(id);

  //   if (!track) {
  //     throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
  //   }

  //   return track;
  // }

  // @Post()
  // public createTrack(@Body(TrackDTOValidationPipe) body: TrackDto): Track {
  //   return this.ctrl.createTrack(body);
  // }

  // @Put(':id')
  // public updateTrack(
  //   @Param('id', UUIDValidationPipe) id: string,
  //   @Body(TrackDTOValidationPipe) body: TrackDto,
  // ): Track {
  //   const track = this.ctrl.updateTrack(id, body);

  //   if (!track) {
  //     throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
  //   }

  //   return track;
  // }

  // @Delete(':id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // public deleteTrack(@Param('id', UUIDValidationPipe) id: string): void {
  //   const result = this.ctrl.deleteTrack(id);

  //   if (!result) {
  //     throw new HttpException('Track was not found.', HttpStatus.NOT_FOUND);
  //   }

  //   return;
  // }
}
