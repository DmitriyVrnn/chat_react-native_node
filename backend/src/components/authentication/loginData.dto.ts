// @ts-ignore
import { IsString } from 'class-validator';

class LoginDataDto{
  @IsString()
    username: string;

  @IsString()
    password: string;
}

export default LoginDataDto;
