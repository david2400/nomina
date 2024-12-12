import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@common/class/base.abstract.repository'
import {Antecedente} from '../entities/antecedente.entity'

@Injectable()
export class AntecedentesRepository extends BaseAbstractRepository<Antecedente> {
  constructor(
    @InjectRepository(Antecedente)
    private readonly antecedentesRepository: Repository<Antecedente>
  ) {
    super(antecedentesRepository)
  }
}
