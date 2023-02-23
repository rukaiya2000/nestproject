import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductController } from './product.controller';
import { Products } from './entity/product';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [ProductsService],
  controllers: [ProductController],
  exports: [ProductModule]
})
export class ProductModule {}
