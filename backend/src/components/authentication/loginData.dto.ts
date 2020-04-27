// @ts-ignore
import { IsString } from 'class-validator';

class LoginDataDto {
  @IsString()
    email: string;

  @IsString()
    password: string;
}

export default LoginDataDto;
