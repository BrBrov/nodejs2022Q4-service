import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

import { validate } from 'uuid';

@Injectable()
export class UUIDValidationPipe implements PipeTransform {
  transform(id: string): string {
    if (!validate(id)) this.throwException();

    return id;
  }

  private throwException(): void {
    throw new HttpException(
      'Bad request. userId is invalid (not uuid)',
      HttpStatus.BAD_REQUEST,
    );
  }
}
