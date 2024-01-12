import { Module } from '@nestjs/common';
import { DepartmentsController } from './department.controller';
import { DepartmentService } from './department.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entity/department.entity';
import { UniversityModule } from '@/university/university.module';



@Module({
  imports: [
    TypeOrmModule.forFeature([Department]),
    UniversityModule,
  ],
  controllers: [DepartmentsController],
  providers: [DepartmentService],
  exports: [DepartmentService],
})
export class DepartmentModule { }