import {
  BadRequestException,
  Body,
  CacheInterceptor,
  CacheTTL,
  Controller,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import * as md5 from 'md5';
import { HttpStatus } from '@nestjs/common/enums';
import { LoginCustomer } from './dto/login-customer';
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30)
  @UsePipes(new ValidationPipe())
  @Post('login')
 
  async login(@Body() body: LoginCustomer) {
    const { email, password } = body;
    const customer = await this.authService.loginCustomer({ email });
    try {
      if (!customer) {
        throw new BadRequestException(" user doesn't exist");
      }
      if (md5(password) + '\r' !== customer.password) {
        throw new BadRequestException('invalid credentials.. check password');
      }
      const jwt_token = await this.jwtService.signAsync({
        email: customer.email,
      });
      return {
        status: HttpStatus.OK,
        message: 'successfully logged in',
        jwt_token,
      };
    } catch (error) {
      return {
        error,
      };
    }
  }
}
