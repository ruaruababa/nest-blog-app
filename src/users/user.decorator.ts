import {
  ExecutionContext,
  NotAcceptableException,
  createParamDecorator,
} from '@nestjs/common';
import { Request } from 'express';

export type SortingParam = {
  property: string;
  direction: string;
};

export enum SortEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export const SortingParams = createParamDecorator(
  (validParams, ctx: ExecutionContext): SortingParam | null => {
    const req: Request = ctx.switchToHttp().getRequest();
    const sort = req.query.sort as string;
    if (!sort) return null;

    // check if the valid params sent is an array
    if (typeof validParams != 'object')
      throw new NotAcceptableException('Invalid sort parameter');

    // check the format of the sort query param is valida SortEnum

    if (!/^[a-zA-Z]+:(asc|desc)$/.test(sort))
      throw new NotAcceptableException(
        'Invalid sort parameter, allowed(asc|desc)',
      );

    // extract the property name and direction and check if they are valid
    const [property, direction] = sort.split(':');
    if (!validParams.includes(property))
      throw new NotAcceptableException(
        `Invalid sort property: ${property}, allowed: [${validParams}]`,
      );

    return { property, direction };
  },
);
