import { PartialType } from '@nestjs/mapped-types';
import { CreateAreaLaboralDto } from './create-area-laboral.dto';

export class UpdateAreaLaboralDto extends PartialType(CreateAreaLaboralDto) {}
