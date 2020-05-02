// @ts-ignore
import { IsString } from 'class-validator';

class CreateUserDto{
  @IsString()
    email: string;

  @IsString()
    password: string;
}

export default CreateUserDto;
