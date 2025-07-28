import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async createRoles(createRoleDto: CreateRoleDto) {
    const saveObj = {
      ...createRoleDto,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const saved = await this.roleRepository.save(saveObj);
    return {
      status: 'SUCCESS',
      httpStatus: HttpStatus.CREATED,
      message: 'Role created successfully',
      data: saved,
    };
  }

  async findAll() {
    return this.roleRepository.find();
  }
}
