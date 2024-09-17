import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/domain/user';
import { AuthProvidersEnum } from '../auth-providers.enum';

export class LoginResponseDto {
  @ApiProperty()
  token: string;

  @ApiProperty()
  refreshToken: string;

  @ApiProperty()
  tokenExpires: number;

  @ApiProperty({
    type: () => User,
  })
  user: User;

  @ApiProperty({
    enum: AuthProvidersEnum,
  })
  provider: AuthProvidersEnum;
}
