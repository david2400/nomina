import {PartialType} from '@nestjs/mapped-types'
import {ApiProperty} from '@nestjs/swagger'
import {IsNumber, IsOptional, IsUUID} from 'class-validator'
import {CreateCesantiaDto} from './create-cesantia.dto'

export class UpdateCesantiaDto extends PartialType(CreateCesantiaDto) {
  @IsUUID()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
