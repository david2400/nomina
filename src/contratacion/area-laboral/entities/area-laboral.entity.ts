import {Column, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@/common/class/base.abstract.entities'

export class AreaLaboral extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  nombre: string
}
