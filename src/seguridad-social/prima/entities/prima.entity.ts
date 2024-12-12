import {PrimaryGeneratedColumn} from 'typeorm'

export class Prima {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  id: number
}
