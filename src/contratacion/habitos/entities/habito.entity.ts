import {PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@/common/class/base.abstract.entities'

export class Habito extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number
}
