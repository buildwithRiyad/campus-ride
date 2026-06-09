import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;

  @IsString()
  studentId!: string;

  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsString()
  phone?: string; // new optional field
}
