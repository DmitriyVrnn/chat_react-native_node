import { IsString } from 'class-validator';

class CreateUserDto{
    @IsString()
    username: string;

    @IsString()
    password: string;
}

export default CreateUserDto;