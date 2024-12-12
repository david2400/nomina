import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Aspirante} from '../entities/aspirante.entity'

@Injectable()
export class AspirantesRepository extends BaseAbstractRepository<Aspirante> {
  constructor(
    @InjectRepository(Aspirante)
    private readonly aspirantesRepository: Repository<Aspirante>
  ) {
    super(aspirantesRepository)
  }
}
