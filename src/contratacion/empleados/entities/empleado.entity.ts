import {Column, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@/common/class/base.abstract.entities'

export class Empleado extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number

  @Column({
    type: 'int',
    nullable: false,
  })
  user_id: number

  @Column({
    type: 'int',
    nullable: false,
  })
  profile_id: number

  @Column({
    type: 'int',
    nullable: true,
  })
  aspirante_id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  username: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string
}
