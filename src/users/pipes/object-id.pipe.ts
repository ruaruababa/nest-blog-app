// src/users/pipes/object-id.pipe.ts
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ObjectIdPipe implements PipeTransform {
  transform(value: any) {
    if (!isValidObjectId(value)) {
      throw new BadRequestException('Invalid ObjectId', {
        cause: new Error(),
        description: 'The provided value is not a valid ObjectId',
      });
    }
    return value;
  }
}
