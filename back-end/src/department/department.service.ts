import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entity/department.entity';
import {CreateDepartmentDto} from './dto/create-department.dto'
import { UniversityService } from '@/university/university.service';


@Injectable()
export class DepartmentService {

  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    private readonly universityService: UniversityService,

  ) { }

 // create department
 async create(createDepartmentDto: CreateDepartmentDto) {
  const dep = new Department();
  dep.name = createDepartmentDto.name;

  const university = await this.universityService.findOne(createDepartmentDto.universityId);
  if (!university) {
    throw new NotFoundException('University not found');
  }

  dep.university = university;

  const savedDepartment = await this.departmentRepository.save(dep);
  if (!savedDepartment) {
    throw new NotFoundException();
  }
  return savedDepartment;
}


  // getAll departments
  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }


  // get one dpartment
  async findOne(id: number): Promise<Department | undefined> {
    const department = await this.departmentRepository.findOne({ where: { id } });
    if (!department) {
      throw new NotFoundException;
    }
    return department;
  }


  // update department
  // async updateDepartment(id: number, updateDepartmentDto: CreateDepartmentDto): Promise<Department | null> {
  //   const department = await this.departmentRepository.findOne({ where: { id } });
  //   if (!department) {
  //     throw new NotFoundException();
  //   }

  //   department.name = updateDepartmentDto.name;

  //   return this.departmentRepository.save(department);
  // }


  // delete dapartment
  async delete(id: number): Promise<void> {
    await this.departmentRepository.delete(id);
  }

}


