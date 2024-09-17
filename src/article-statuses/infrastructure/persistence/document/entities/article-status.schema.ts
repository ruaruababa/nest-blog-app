import { ApiProperty } from '@nestjs/swagger';
import { ArticleStatusEnum } from '../../../../status.enum';

export class ArticleStatusSchema {
  @ApiProperty({
    type: String,
  })
  _id: string;

  @ApiProperty({
    type: ArticleStatusEnum,
    example: ArticleStatusEnum.Approved,
  })
  name?: ArticleStatusEnum;
}
