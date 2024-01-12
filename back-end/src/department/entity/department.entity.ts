import { University } from '@/university/entities/university.entity';
import { Enseignant } from '@/enseignant/entities/enseignant.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Relation } from 'typeorm';
import { BaseEntity } from '@/core/base.entity';

@Entity()
export class Department extends BaseEntity{

  @Column()
  name: string;

  @ManyToOne(() => University, university => university.departments)
  university: Relation<University>;

  @OneToMany(() => Enseignant, enseignant => enseignant.department)
  enseignants: Enseignant[];
}