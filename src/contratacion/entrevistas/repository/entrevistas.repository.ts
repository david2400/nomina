import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Entrevista} from '../entities/entrevista.entity'

@Injectable()
export class EntrevistasRepository extends BaseAbstractRepository<Entrevista> {
  constructor(
    @InjectRepository(Entrevista)
    private readonly entrevistasRepository: Repository<Entrevista>
  ) {
    super(entrevistasRepository)
  }
}
