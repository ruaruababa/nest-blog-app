import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum } from '../../../../roles.enum';

export class RoleSchema {
  @ApiProperty({
    type: String,
  })
  _id: string;

  @ApiProperty({
    type: () => RoleEnum,
  })
  name?: string;
}
