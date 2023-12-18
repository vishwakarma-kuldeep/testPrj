import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Creating new User
  @Post('signup')
  async create(@Req() req, @Res() res, @Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.create(createUserDto);
      if (user === 'User already exists')
        return res.status(HttpStatus.CONFLICT).json({ response: user });
      return res
        .status(HttpStatus.CREATED)
        .json({ response: 'User created successfully' });
    } catch (error) {
      throw error;
    }
  }
  @Post('login')
  async login(@Req() req, @Res() res, @Body() loginUserDto: LoginUserDto) {
    try {
      const user = await this.userService.findOne(
        loginUserDto.email,
        loginUserDto.password,
      );
      if (user === 'User not found')
        return res.status(HttpStatus.NOT_FOUND).json({ response: user });
      if (user === 'Password is incorrect')
        return res.status(HttpStatus.UNAUTHORIZED).json({ response: user });

      // return res.status(HttpStatus.OK).json({ response: user });
      // Set the token in the cookie and return the response token
      const token = user;

      return res
        .cookie('token', token, {
          httpOnly: true,
        })
        .status(HttpStatus.OK)
        .json(user);
    } catch (error) {
      throw error;
    }
  }
  @ApiBearerAuth()
  @Get('me')
  async getMe(@Req() req, @Res() res) {
    try {
      const user = await this.userService.findOneAUth(req.user._id);
      if (!user)
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ response: 'User not found' });
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      throw error;
    }
  }
  @ApiBearerAuth()
  //  logout
  @Get('logout')
  async logout(@Req() req, @Res() res) {
    try {
      // Expire the token
      return res
        .cookie('token', '', {
          expires: new Date(Date.now()),
          httpOnly: true,
        })
        .status(HttpStatus.OK)
        .json('User logged out successfully');
    } catch (error) {
      throw error;
    }
  }
}
