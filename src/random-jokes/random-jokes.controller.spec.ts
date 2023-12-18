import { Test, TestingModule } from '@nestjs/testing';
import { RandomJokesController } from './random-jokes.controller';
import { RandomJokesService } from './random-jokes.service';

describe('RandomJokesController', () => {
  let controller: RandomJokesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomJokesController],
      providers: [RandomJokesService],
    }).compile();

    controller = module.get<RandomJokesController>(RandomJokesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
