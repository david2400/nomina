import {Column, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@/common/class/base.abstract.entities'

export class Aspirante extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  primer_nombre: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  segundo_nombre: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  primer_apellido: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  segundo_apellido: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  nombre_completo: string

  @Column({
    type: 'date',
    nullable: false,
  })
  fecha_nacimiento: Date
}
