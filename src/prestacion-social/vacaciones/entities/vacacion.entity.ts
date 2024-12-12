import {PrimaryGeneratedColumn} from 'typeorm'

export class Vacacion {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number
}
