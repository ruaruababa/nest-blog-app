import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { ArticleStatus } from '../domain/article-status';

export class ArticleStatusDTO implements ArticleStatus {
  @ApiProperty()
  @IsNumber()
  id: number;
}
