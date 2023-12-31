import {
    IsNotEmpty,
    MinLength,
    MaxLength,
    IsEmail,
    IsString,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger'




  export class LoginUserDto {

    @ApiProperty({
      description: 'The email of the user',
      type: String,
      minLength: 3,
      maxLength: 255,
    })

    @IsNotEmpty()
    @IsEmail()
    @MinLength(3)
    @MaxLength(255)
    readonly email: string;
  
    @ApiProperty({
      description: 'The password of the user',
      type: String,
      minLength: 8,
      maxLength: 20,
    })

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    readonly password: string;
  }