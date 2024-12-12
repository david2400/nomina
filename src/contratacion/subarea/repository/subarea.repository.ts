import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Subarea} from '../entities/subarea.entity'

@Injectable()
export class SubareaRepository extends BaseAbstractRepository<Subarea> {
  constructor(
    @InjectRepository(Subarea)
    private readonly subareaRepository: Repository<Subarea>
  ) {
    super(subareaRepository)
  }
}
