import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { UpdatePasswordDto } from 'src/database/models/user-models';

@Injectable()
export class UserUpdateDTOValidationPipe implements PipeTransform {
  async transform(
    update: UpdatePasswordDto,
    { metatype }: ArgumentMetadata,
  ): Promise<UpdatePasswordDto> {
    const obj = plainToClass(metatype, update);
    const result = await validate(obj);

    if (result.length > 0) {
      this.throwException();
    }

    return update;
  }

  private throwException(): void {
    throw new HttpException(
      'Bad request. body does not contain required fields',
      HttpStatus.BAD_REQUEST,
    );
  }
}
