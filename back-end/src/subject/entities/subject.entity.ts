import { BaseEntity } from '@/core/base.entity';
import { Enseignant } from '@/enseignant/entities/enseignant.entity';
import { Column, Entity, ManyToOne, Relation } from 'typeorm';

@Entity()
export class Subject extends BaseEntity {
	@Column()
	name: string;

	@Column()
	description: string;
	/**
	 * @todo add Salle relation
	 */

	@ManyToOne(() => Enseignant, enseignant => enseignant.subject)
	enseignant: Relation<Enseignant>
}
