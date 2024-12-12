import {PartialType} from '@nestjs/mapped-types'
import {ApiProperty} from '@nestjs/swagger'
import {CreateAntecedenteDto} from './create-antecedente.dto'
import {IsNumber, IsOptional, IsUUID} from 'class-validator'

export class UpdateAntecedenteDto extends PartialType(CreateAntecedenteDto) {
  @IsUUID()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
