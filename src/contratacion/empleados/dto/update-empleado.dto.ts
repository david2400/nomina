import {PartialType} from '@nestjs/mapped-types'
import {CreateEmpleadoDto} from './create-empleado.dto'
import {IsNumber, IsOptional, IsUUID} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class UpdateEmpleadoDto extends PartialType(CreateEmpleadoDto) {
  @IsUUID()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
