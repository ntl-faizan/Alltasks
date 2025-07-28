import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Role } from './entities/role.entity';
import { Product } from 'src/products/entities/product.entity';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { StockMovement } from 'src/stock-movements/entities/stock-movement.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
   TypeOrmModule.forFeature([User, Role, Product, Supplier, StockMovement]),
   JwtModule.register({ secret: process.env.JWT_SECRET }),
  ],
})
export class RolesModule {}
