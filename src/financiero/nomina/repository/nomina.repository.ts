import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Nomina} from '../entities/nomina.entity'

@Injectable()
export class NominaRepository extends BaseAbstractRepository<Nomina> {
  constructor(
    @InjectRepository(Nomina)
    private readonly nominaRepository: Repository<Nomina>
  ) {
    super(nominaRepository)
  }
}
