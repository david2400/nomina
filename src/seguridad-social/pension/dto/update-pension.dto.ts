import {PartialType} from '@nestjs/mapped-types'
import {ApiProperty} from '@nestjs/swagger'
import {IsNumber, IsOptional, IsUUID} from 'class-validator'
import {CreatePensionDto} from './create-pension.dto'

export class UpdatePensionDto extends PartialType(CreatePensionDto) {
  @IsUUID()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
