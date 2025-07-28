import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class RoleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Access token missing or invalid');
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded: any = jwt.verify(token, 'your_secret'); // Use ConfigService in real apps
      if (decoded.roleId !== 1) {
        throw new UnauthorizedException('Access denied. Only Admins allowed.');
      }

      req['user'] = decoded;
      next();
    } catch (err) {
      throw new UnauthorizedException('Access token invalid or expired');
    }
  }
}
