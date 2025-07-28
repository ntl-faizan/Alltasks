import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Access token missing or invalid');
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, 'your_secret'); // or your secret
      const userRoleId = decoded['roleId']; // make sure this exists in token

      if (userRoleId !== 1) {
        throw new UnauthorizedException('Access denied. Admins only.');
      }

      return true;
    } catch (err) {
      throw new UnauthorizedException('Access token invalid');
    }
  }
}
