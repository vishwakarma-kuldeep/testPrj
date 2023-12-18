import { Test, TestingModule } from '@nestjs/testing';
import { RandomJokesService } from './random-jokes.service';

describe('RandomJokesService', () => {
  let service: RandomJokesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomJokesService],
    }).compile();

    service = module.get<RandomJokesService>(RandomJokesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
