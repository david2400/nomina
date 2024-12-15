import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Vacacion} from '../entities/vacacion.entity'

@Injectable()
export class VacacionesRepository extends BaseAbstractRepository<Vacacion> {
  constructor(
    @InjectRepository(Vacacion)
    private readonly vacacionesRepository: Repository<Vacacion>
  ) {
    super(vacacionesRepository)
  }
}
