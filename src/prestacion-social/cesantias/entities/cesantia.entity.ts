import {PrimaryGeneratedColumn} from 'typeorm'

export class Cesantia {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number
}
