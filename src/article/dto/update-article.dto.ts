import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { ArticleStatus } from '../../article-statuses/domain/article-status';

export class UpdateArticleDto {
  @ApiProperty({
    type: String,
    description: 'Title of the article',
    required: false,
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    type: String,
    description: 'Content of the article',
    required: false,
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({
    type: () => ArticleStatus,
    enum: ArticleStatus,
    description: 'Status of the article',
    required: false,
  })
  @IsEnum(ArticleStatus)
  @IsOptional()
  status?: ArticleStatus;

  @ApiProperty({
    type: String,
    description: 'Author ID',
    required: false,
  })
  @IsString()
  @IsOptional()
  author?: string;

  @ApiProperty({
    type: [String],
    description: 'Array of category IDs',
    required: false,
  })
  @IsArray()
  @IsOptional()
  categories?: string[];

  @ApiProperty({
    type: [String],
    description: 'Array of tag IDs',
    required: false,
  })
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty({
    type: Date,
    description: 'Publication date of the article',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  publishedAt?: Date;
}
