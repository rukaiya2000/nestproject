import { IsEmail, IsNotEmpty, IsString} from "class-validator";
export class LoginCustomer {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string
}

