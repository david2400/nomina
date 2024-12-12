import {Column, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@/common/class/base.abstract.entities'

export class Entrevista extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number

  @Column({
    type: 'int',
    nullable: false,
  })
  aspirante_id: string

  @Column({
    type: 'int',
    nullable: false,
  })
  fecha_entrevista: Date
}
