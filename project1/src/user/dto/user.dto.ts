/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNumber, IsString, MaxLength } from 'class-validator';

export class UserDto {
  @IsString()
  @MaxLength(5, { message: 'Name is too long' })
  name: string;

  @IsString()
  @IsEmail({}, { message: 'Email is not valid' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @MaxLength(255, { message: 'Password is too long' })
  password: string;

  @IsNumber()
  age: number;
}
