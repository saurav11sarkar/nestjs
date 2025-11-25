import { IsNumber, IsString } from 'class-validator';

export class MyNameDto {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
}
