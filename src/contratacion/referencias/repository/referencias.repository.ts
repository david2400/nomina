import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Referencia} from '../entities/referencia.entity'

@Injectable()
export class ReferenciasRepository extends BaseAbstractRepository<Referencia> {
  constructor(
    @InjectRepository(Referencia)
    private readonly referenciasRepository: Repository<Referencia>
  ) {
    super(referenciasRepository)
  }
}
