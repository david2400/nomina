import {BaseEntity} from '@/common/class/base.abstract.entities'
import {PrimaryGeneratedColumn} from 'typeorm'

export class Subarea extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number
}
