import { CreateUserDto } from '@/user/dto/create-user.dto';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';

export class CreateEnseignantDto {

	@Type(() => CreateEnseignantDto)
	@ValidateNested()
	@IsNotEmpty()
	user: CreateUserDto;

	@IsNumber()
  subject: number;

  @IsDate()
  startingDate: Date;

  @IsNumber()
  departement: number;

}