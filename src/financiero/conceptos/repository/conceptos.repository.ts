import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Concepto} from '../entities/concepto.entity'

@Injectable()
export class ConceptosRepository extends BaseAbstractRepository<Concepto> {
  constructor(
    @InjectRepository(Concepto)
    private readonly conceptosRepository: Repository<Concepto>
  ) {
    super(conceptosRepository)
  }
}
