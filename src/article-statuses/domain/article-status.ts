import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';
import { ArticleStatusEnum } from '../status.enum';

const idType = String;

export class ArticleStatus {
  @Allow()
  @ApiProperty({
    type: idType,
  })
  id: number | string;

  @Allow()
  @ApiProperty({
    enum: ArticleStatusEnum,
  })
  name?: ArticleStatusEnum;
}
