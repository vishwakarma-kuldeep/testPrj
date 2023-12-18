
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            findOneAUth: jest.fn(),
            // Add other methods used in the controller and mock them if necessary
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Add your test cases for UserController methods here
  it('should create a new user', async () => {
    const createUserDto = { name: 'John Doe', email: 'john@example.com', password: 'password' };
    const mockResponse = 'User created successfully';

    jest.spyOn(userService, 'create').mockResolvedValue(mockResponse);

    const req = {}; // Mocked request object
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }; // Mocked response object

    await controller.create(req as any, res as any, createUserDto);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ response: mockResponse });
  });

  // Add other test cases for UserController methods

});