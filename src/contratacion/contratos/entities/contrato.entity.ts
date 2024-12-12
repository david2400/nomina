import {Column, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@/common/class/base.abstract.entities'

export class Contrato extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  nombre_completo: string

  @Column({
    type: 'date',
  })
  fecha_inicio: Date

  @Column({
    type: 'date',
  })
  fecha_culminacion: Date

  @Column({
    type: 'int',
  })
  tipo_contrato_id: Date

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  salario: number
}
