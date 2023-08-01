import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateUserDto } from 'src/database/models/user-models';

@Injectable()
export class UserDTOValidationPipe implements PipeTransform {
  async transform(
    dto: CreateUserDto,
    { metatype }: ArgumentMetadata,
  ): Promise<CreateUserDto> {
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
