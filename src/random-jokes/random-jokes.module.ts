import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RandomJokesService } from './random-jokes.service';
import { RandomJokesController } from './random-jokes.controller';

@Module({
  imports:[ConfigModule.forRoot({ isGlobal: true }),],
  controllers: [RandomJokesController],
  providers: [RandomJokesService],
})
export class RandomJokesModule {}
