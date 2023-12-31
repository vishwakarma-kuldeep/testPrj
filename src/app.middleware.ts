import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from './users/user.service';

interface UserRequest extends Request {
  user: any;
}
@Injectable()
export class isAuthenticated implements NestMiddleware {

  constructor(
    private readonly jwt: JwtService,
    private readonly usersService: UserService,
  ) {}

  async use(req: UserRequest, res: Response, next: NextFunction) {
    try {
      if (
        req.headers.authorization 
      ) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = await this.jwt.verify(token, { secret: process.env.JWT_SECRET });
        if(!decoded) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        const user = await this.usersService.findOneAUth(decoded.id)
        if (!user) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        req.user = user;
        console.log('Passed from middleware');
        next();
      } else {
        throw new HttpException('No token found', HttpStatus.NOT_FOUND);
      }
    } catch {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
