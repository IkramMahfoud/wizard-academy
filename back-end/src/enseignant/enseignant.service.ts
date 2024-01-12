import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enseignant } from './entities/enseignant.entity';
import { CreateEnseignantDto } from './dto/create-enseignant.dto';
import { UpdateEnseignantDto } from './dto/update-enseignant.dto';
import { Role } from '@/user/roles';

@Injectable()
export class EnseignantService {
  constructor(
    @InjectRepository(Enseignant)
    private readonly enseignantRepository: Repository<Enseignant>,
    ){}


  async create(createEnseignantDto: CreateEnseignantDto) {
    const user = createEnseignantDto.user;
    user.role = Role.ENSEIGNANT;

    const enseignant = this.enseignantRepository.create({
      user,
      startingDate: createEnseignantDto.startingDate,
      subject: { id: createEnseignantDto.subject }
    });

    const savedEnseignant = await this.enseignantRepository.save(enseignant);
    delete savedEnseignant.user.password;
    return savedEnseignant;
  }


  async findAll() {
    return await this.enseignantRepository.find();
  }

  async findOne(id: number) {
    const enseignant = await this.enseignantRepository.findOne({ where: { id } });
    if (!enseignant) {
      throw new NotFoundException(`Enseignant with ID => ${id} not found`);
    }
    return enseignant;
  }

  // error here:
  async update(id: number, updateEnseignantDto: UpdateEnseignantDto) {

  }



  async delete(id: number) {
    const enseignant = await this.findOne(id);
    if (!enseignant) {
      throw new NotFoundException(`Enseignant with ID ${id} not found`);
    }
    return await this.enseignantRepository.delete(enseignant);
  }


  // async assignDepartment(enseignantId: number, departmentId: number) {
  //   const enseignant = await this.findOne(enseignantId);
  //   const department = await this.departmentRepository.findOne({ where: { id: departmentId } });
  //   if (!department) {
  //     throw new NotFoundException(`Department with ID ${departmentId} not found`);
  //   }
  //   enseignant.department = department;
  //   return await this.enseignantRepository.save(enseignant);
  // }

}
