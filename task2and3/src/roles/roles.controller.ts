import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiTags, ApiOperation, ApiHeader, ApiBearerAuth } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { RoleGuard } from './guards/role.guard';

@ApiBearerAuth('access-token')
@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(
    private readonly rolesService: RolesService,
    private jwtService: JwtService
  ) {}

  @Post('create')
  @UseGuards(RoleGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer access token',
    required: true,
  })
  @ApiOperation({ summary: 'Create a new role (Admins only)' })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRoles(createRoleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all roles' })
  findAll() {
    return this.rolesService.findAll();
  }
}
