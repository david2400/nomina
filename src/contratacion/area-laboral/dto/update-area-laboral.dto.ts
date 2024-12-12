import {PartialType} from '@nestjs/mapped-types'
import {ApiProperty} from '@nestjs/swagger'
import {IsNumber, IsOptional, IsUUID} from 'class-validator'
import {CreateAreaLaboralDto} from './create-area-laboral.dto'

export class UpdateAreaLaboralDto extends PartialType(CreateAreaLaboralDto) {
  @IsUUID()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
