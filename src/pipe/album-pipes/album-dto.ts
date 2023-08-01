import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { AlbumDto } from 'src/database/models/album-models';

@Injectable()
export class AlbumDTOValidationPipe implements PipeTransform {
  async transform(
    dto: AlbumDto,
    { metatype }: ArgumentMetadata,
  ): Promise<AlbumDto> {
    const obj = plainToClass(metatype, dto);
    const result = await validate(obj);

    if (result.length > 0) {
      this.throwException();
    }

    return dto;
  }

  private throwException(): void {
    throw new HttpException(
      'Bad request. body does not contain required fields',
      HttpStatus.BAD_REQUEST,
    );
  }
}
