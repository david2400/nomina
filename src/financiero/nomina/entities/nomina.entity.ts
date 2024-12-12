import {PrimaryGeneratedColumn} from 'typeorm'

export class Nomina {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number
}
