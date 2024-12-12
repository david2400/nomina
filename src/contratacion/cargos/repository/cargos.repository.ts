import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Cargo} from '../entities/cargo.entity'

@Injectable()
export class CargosRepository extends BaseAbstractRepository<Cargo> {
  constructor(
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>
  ) {
    super(cargoRepository)
  }
}
