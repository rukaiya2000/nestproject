import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Customers } from 'src/customer/entity/customer';
import { Repository } from 'typeorm';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Customers) private customer: Repository<Customers>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_KEY,
    });
  }
  async validate(payload: { email: string }) {
    const user = await this.customer.findOne({
      where: {
        email: payload.email,
      },
    });
    return {
      email: user.email,
    };
  }
}