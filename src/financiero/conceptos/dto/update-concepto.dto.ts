import {PartialType} from '@nestjs/mapped-types'
import {ApiProperty} from '@nestjs/swagger'
import {IsNumber, IsOptional, IsUUID} from 'class-validator'
import {CreateConceptoDto} from './create-concepto.dto'

export class UpdateConceptoDto extends PartialType(CreateConceptoDto) {
  @IsUUID()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
