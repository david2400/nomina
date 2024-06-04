import { PartialType } from '@nestjs/mapped-types';
import { CreatePrimaDto } from './create-prima.dto';

export class UpdatePrimaDto extends PartialType(CreatePrimaDto) {}
