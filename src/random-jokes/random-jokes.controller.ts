import { Controller,Get, Req,Res,HttpStatus } from '@nestjs/common';
import { RandomJokesService } from './random-jokes.service';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@Controller('api/random-joke')
export class RandomJokesController {
  constructor(private readonly randomJokesService: RandomJokesService) {}
  @Get()
  @ApiBearerAuth()
  async getJokes(@Req() req, @Res() res) {
    try {
      const jokes = await this.randomJokesService.getJokes();
      return res.status(HttpStatus.OK).json({ jokes });
    } catch (error) {
      throw error;
    }
  }
}
