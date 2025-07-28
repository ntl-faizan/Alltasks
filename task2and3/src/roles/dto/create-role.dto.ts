import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'Admin', description: 'Name of the role' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Can manage everything', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'active', required: false })
  @IsOptional()
  @IsString()
  status?: string;
}
