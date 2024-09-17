import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class FileDto {
  @ApiProperty()
  @IsMongoId()
  id: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  path: string;
}
