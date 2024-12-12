import {PrimaryGeneratedColumn} from 'typeorm'

export class Pension {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number
}
