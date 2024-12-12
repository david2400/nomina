import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Prima} from '../entities/prima.entity'

@Injectable()
export class PrimaRepository extends BaseAbstractRepository<Prima> {
  constructor(
    @InjectRepository(Prima)
    private readonly primaRepository: Repository<Prima>
  ) {
    super(primaRepository)
  }
}
