import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Jornada} from '../entities/jornada.entity'

@Injectable()
export class JornadasRepository extends BaseAbstractRepository<Jornada> {
  constructor(
    @InjectRepository(Jornada)
    private readonly jornadasRepository: Repository<Jornada>
  ) {
    super(jornadasRepository)
  }
}
