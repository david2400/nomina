import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Contrato} from '../entities/contrato.entity'

@Injectable()
export class ContratosRepository extends BaseAbstractRepository<Contrato> {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratosRepository: Repository<Contrato>
  ) {
    super(contratosRepository)
  }
}
