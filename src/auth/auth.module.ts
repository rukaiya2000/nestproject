import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from 'src/customer/entity/customer';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [TypeOrmModule.forFeature([Customers]),
  JwtModule.register({
    secret: "secret",
    signOptions: {expiresIn: '1d'}
  })
],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}


