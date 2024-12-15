import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Cesantia} from '../entities/cesantia.entity'

@Injectable()
export class CesantiasRepository extends BaseAbstractRepository<Cesantia> {
  constructor(
    @InjectRepository(Cesantia)
    private readonly cesantiaRepository: Repository<Cesantia>
  ) {
    super(cesantiaRepository)
  }
}
