import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type, plainToInstance } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';

export class BaseQueryDto<TFilter, TSort> {
  @ApiPropertyOptional()
  @Transform(({ value }) => (value ? Number(value) : 1))
  @IsNumber()
  @IsOptional()
  page?: number;

  @ApiPropertyOptional()
  @Transform(({ value }) => (value ? Number(value) : 10))
  @IsNumber()
  @IsOptional()
  limit?: number;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Transform(({ value }) => {
    return value ? plainToInstance(Object, JSON.parse(value)) : undefined;
  })
  @ValidateNested()
  @Type(() => Object)
  filters?: TFilter | null;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Transform(({ value }) => {
    return value ? plainToInstance(Object, JSON.parse(value)) : undefined;
  })
  @ValidateNested({ each: true })
  @Type(() => Object)
  sort?: TSort[] | null;
}
