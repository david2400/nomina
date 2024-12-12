import {BaseEntity} from '@/common/class/base.abstract.entities'
import {Column, PrimaryGeneratedColumn} from 'typeorm'

export class TipoContrato extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  nombre: string
}
