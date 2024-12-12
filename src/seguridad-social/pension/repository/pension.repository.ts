import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Pension} from '../entities/pension.entity'

@Injectable()
export class PensionRepository extends BaseAbstractRepository<Pension> {
  constructor(
    @InjectRepository(Pension)
    private readonly nominaRepository: Repository<Pension>
  ) {
    super(nominaRepository)
  }
}
