import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ArtistDto } from 'src/database/models/artist-models';

@Injectable()
export class ArtistDTOValidationPipe implements PipeTransform {
  async transform(
    dto: ArtistDto,
    { metatype }: ArgumentMetadata,
  ): Promise<ArtistDto> {
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
