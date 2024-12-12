import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {TipoContrato} from '../entities/tipo-contrato.entity'

@Injectable()
export class TipoContratoRepository extends BaseAbstractRepository<TipoContrato> {
  constructor(
    @InjectRepository(TipoContrato)
    private readonly tipoContratoRepository: Repository<TipoContrato>
  ) {
    super(tipoContratoRepository)
  }
}
