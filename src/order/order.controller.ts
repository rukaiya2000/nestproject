import {CacheInterceptor, CacheTTL, Controller,Get, Param,Request,UseGuards, UseInterceptors} from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guards';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly customerOrderService: OrderService) {}
    // @UseInterceptors(CacheInterceptor)
    // @CacheTTL(30)
    @UseGuards(JwtGuard)
    @Get('/:field')
    getProduct(@Request() req, @Param("field") field: string) {
      //acquaring email from the jwt token
      const email = req.user["email"]
      return this.customerOrderService.getProduct(email, field) 
    }

}
