import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {AreaLaboral} from '../entities/area-laboral.entity'

@Injectable()
export class AreaLaboralRepository extends BaseAbstractRepository<AreaLaboral> {
  constructor(
    @InjectRepository(AreaLaboral)
    private readonly areaLaboralRepository: Repository<AreaLaboral>
  ) {
    super(areaLaboralRepository)
  }
}
