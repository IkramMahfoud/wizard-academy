import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateEnseignantDto } from './create-enseignant.dto';

export class UpdateEnseignantDto extends OmitType(PartialType(CreateEnseignantDto), [
	'user',
]){}
