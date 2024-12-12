import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Habito} from '../entities/habito.entity'

@Injectable()
export class HabitosRepository extends BaseAbstractRepository<Habito> {
  constructor(
    @InjectRepository(Habito)
    private readonly habitosRepository: Repository<Habito>
  ) {
    super(habitosRepository)
  }
}
