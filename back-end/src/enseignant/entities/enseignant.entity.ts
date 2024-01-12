import { UserableEntity } from "@/core/userable.entity";
import { Department } from "@/department/entity/department.entity";
import { Subject } from "@/subject/entities/subject.entity";
import { Column, Entity, ManyToOne, Relation} from "typeorm";

@Entity()
export class Enseignant extends UserableEntity{

  @Column({ type: 'date' })
  startingDate: Date;

  @ManyToOne(() => Department, department => department.enseignants)
  department:Relation<Department>;

  @ManyToOne(() => Subject, subject => subject.enseignant)
  subject: Subject

}