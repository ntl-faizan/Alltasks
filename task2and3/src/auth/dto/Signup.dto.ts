import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty({ message: "Email Should Not Be Empty" })
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  @IsNotEmpty({ message: "Password Should Not Be Empty" })
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: "Name Should Not Be Empty" })
  name: string;
}
