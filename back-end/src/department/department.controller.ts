import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentService: DepartmentService) { }

  @Get()
  async findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.departmentService.findOne(id);
  }

  @Post()
async create(@Body() createDepartmentDto: CreateDepartmentDto) {
  return this.departmentService.create(createDepartmentDto);
}

  // @Put(':id')
  // async updateDepartment(@Param('id') id: number, @Body() updateDepartmentDto: UpdateDepartmentDto) {
  //   return this.departmentService.updateDepartment(id, updateDepartmentDto.name);
  // }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.departmentService.delete(id);
  }
}
