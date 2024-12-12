import {PartialType} from '@nestjs/mapped-types'
import {ApiProperty} from '@nestjs/swagger'
import {IsNumber, IsOptional, IsUUID} from 'class-validator'
import {CreateNominaDto} from './create-nomina.dto'

export class UpdateNominaDto extends PartialType(CreateNominaDto) {
  @IsUUID()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
