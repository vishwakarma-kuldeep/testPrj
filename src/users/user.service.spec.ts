

import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './interfaces/users.interface/users.interface.interface';

describe('UserService', () => {
  let service: UserService;
  let userModel: Model<any>; // Replace 'any' with your actual UserInterface type

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken('User'), // Use the same token as in your service
          useValue: {
            findOne: jest.fn(),
            create: jest.fn().mockReturnValue('User Account Created Successfully'), // Mock the create method and return the expected result
            // Other methods that your UserService uses from the UserModel
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userModel = module.get<Model<UserInterface>>(getModelToken('User'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add your tests for UserService methods
  // it('should create a user', async () => {
  //   const createUserDto = new CreateUserDto('John Doe', 'johndoe@example.com', 'somePassword');
  //   const result = await service.create(createUserDto);
  //   console.log(result);
  //   expect(result).toBe('User Account Created Successfully');
  // });

  // Add other test cases for UserService methods

});
