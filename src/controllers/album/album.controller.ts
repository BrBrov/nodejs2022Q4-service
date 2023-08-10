import { Controller } from '@nestjs/common';

@Controller()
export default class AlbumController {
  // constructor(private ctrl: AlbumService) {}
  // @Get()
  // public getAllAlbums(): Array<Album> {
  //   return this.ctrl.getAllAlbums();
  // }
  // @Get(':id')
  // public getAlbum(@Param('id', UUIDValidationPipe) id: string): Album {
  //   const track = this.ctrl.getAlbum(id);
  //   if (!track) {
  //     throw new HttpException('Album was not found.', HttpStatus.NOT_FOUND);
  //   }
  //   return track;
  // }
  // @Post()
  // public createAlbum(@Body(AlbumDTOValidationPipe) body: AlbumDto): Album {
  //   return this.ctrl.createAlbum(body);
  // }
  // @Put(':id')
  // public updateAlbum(
  //   @Param('id', UUIDValidationPipe) id: string,
  //   @Body(AlbumDTOValidationPipe) body: AlbumDto,
  // ): Album {
  //   const track = this.ctrl.updateAlbum(id, body);
  //   if (!track) {
  //     throw new HttpException('Album was not found.', HttpStatus.NOT_FOUND);
  //   }
  //   return track;
  // }
  // @Delete(':id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // public deleteAlbum(@Param('id', UUIDValidationPipe) id: string): void {
  //   const result = this.ctrl.deleteAlbum(id);
  //   if (!result) {
  //     throw new HttpException('Album was not found.', HttpStatus.NOT_FOUND);
  //   }
  //   return;
  // }
}
