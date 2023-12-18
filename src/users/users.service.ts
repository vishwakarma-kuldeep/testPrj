import {
  Injectable,
  Inject,
  BadRequestException,
  NotFoundException,
  ConflictException,
  UnauthorizedException,
  forwardRef,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UsersInterface } from './interfaces/users.interface/users.interface.interface';
// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');
const {tokenGenerator} = require('./helper/jwtToken');
// import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UsersInterface>, //private authService: AuthService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      let checkUser = await this.userModel.findOne(
        { email: createUserDto.email.trim().toLowerCase() },
        { isDeleted: false },
      );
      if (checkUser) {
        throw new ConflictException('User already exists');
      }
      let createdUser = new this.userModel(createUserDto);
      await createdUser.save();
      return `User Account Created Successfully`;
    } catch (error) {
      return error.message;
    }
  }

  // Used in middleware service
  async findOneAUth(id: String) {
    try {
      const user = await this.userModel.findOne({ _id: id, isDeleted: false },{__v:0, password:0, isDeleted:0, createdAt:0, updatedAt:0});
      return user;
    } catch (error) {
      throw error;
    }
  }

  

  async findOne(email: string, password: string): Promise<String | Object> {
    try {
      const user = await this.userModel.findOne({
        email: email,
        isDeleted: false,
      });
      if (!user) throw new NotFoundException('User not found');
      // Now compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new UnauthorizedException('Password is incorrect');
      // Generate token from tokenGenerator and return it

      const token = await tokenGenerator({id:user._id},process.env.JWT_SECRET);
      return token;
    } catch (error) {
      throw error.message;
    }
  }

 
}
