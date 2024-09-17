import { ApiProperty } from '@nestjs/swagger';
import { ArticleStatus } from '../../article-statuses/domain/article-status';

export class Article {
  @ApiProperty({
    type: String, // Assuming ID will be a string, e.g., MongoDB ObjectId
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  title: string;

  @ApiProperty({
    type: String,
  })
  description: string;

  @ApiProperty({
    type: String,
  })
  content: string;

  @ApiProperty({
    type: () => ArticleStatus,
  })
  status: ArticleStatus;

  @ApiProperty({
    type: String,
  })
  author: string;

  @ApiProperty({
    type: [String],
  })
  comments: string[];

  @ApiProperty({
    type: [String],
  })
  categories: string[];

  @ApiProperty({
    type: [String],
  })
  tags: string[];

  @ApiProperty({
    type: Date,
  })
  publishedAt: Date;

  @ApiProperty({
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  updatedBy: string;

  @ApiProperty({
    type: Date,
  })
  updatedAt: Date;

  @ApiProperty({
    type: Date,
    nullable: true,
  })
  deletedAt: Date | null;
}
