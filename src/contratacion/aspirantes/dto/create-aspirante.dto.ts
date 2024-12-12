import {BaseDto} from '@/common/class/base.abstract.dto'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty} from 'class-validator'

export class CreateAspiranteDto extends BaseDto {
  @IsNotEmpty()
  @ApiProperty()
  user_id: string
}
