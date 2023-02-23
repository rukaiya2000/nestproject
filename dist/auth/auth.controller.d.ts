import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { HttpStatus } from '@nestjs/common/enums';
import { LoginCustomer } from './dto/login-customer';
export declare class AuthController {
    private authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    login(body: LoginCustomer): Promise<{
        status: HttpStatus;
        message: string;
        jwt_token: string;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        message?: undefined;
        jwt_token?: undefined;
    }>;
}
