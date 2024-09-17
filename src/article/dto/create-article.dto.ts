import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ArticleStatus } from '../../article-statuses/domain/article-status';

export class CreateArticleDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    type: () => ArticleStatus,
    enum: ArticleStatus,
  })
  @IsEnum(ArticleStatus)
  @IsOptional()
  status: ArticleStatus;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    type: [String],
  })
  @IsArray()
  @IsOptional()
  categories?: string[];

  @ApiProperty({
    type: [String],
  })
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty({
    type: Date,
  })
  @IsDateString()
  @IsOptional()
  publishedAt?: Date;
}
