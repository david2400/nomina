import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty} from 'class-validator'
import {BaseDto} from '@/common/class/base.abstract.dto'

export class CreateEmpleadoDto extends BaseDto {
  @IsNotEmpty()
  @ApiProperty()
  user_id: number

  @IsNotEmpty()
  @ApiProperty()
  profile_id: number

  @IsNotEmpty()
  @ApiProperty()
  aspirante_id: number

  @IsNotEmpty()
  @ApiProperty()
  username: string

  @IsNotEmpty()
  @ApiProperty()
  password: string
}
