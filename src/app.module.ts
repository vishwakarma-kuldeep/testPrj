import { MiddlewareConsumer, Module, NestModule, RequestMethod, ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus , forwardRef} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DbModule } from './db/db.module';
import { isAuthenticated } from './app.middleware';
import { JwtModule } from '@nestjs/jwt';
// import { AuthService } from './auth/auth.service';
// import { AuthModule } from './auth/auth.module';
import { RandomJokesModule } from './random-jokes/random-jokes.module';
import { JwtService } from '@nestjs/jwt';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './global-exception.filter';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DbModule, forwardRef(()=>UsersModule), RandomJokesModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    //  AuthModule
    ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    }, 
  ],
 
})

export class AppModule {
  constructor(private readonly jwtService: JwtService) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthenticated)
      .exclude({
        path: 'api/users/login',
        method: RequestMethod.POST,
      },{
        path: 'api/users/signup',
        method: RequestMethod.POST,
      })
      .forRoutes('*'); // Apply the middleware to all routes or specify specific routes
  }
}
