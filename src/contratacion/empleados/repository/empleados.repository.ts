import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Empleado} from '../entities/empleado.entity'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'

@Injectable()
export class EmpleadosRepository extends BaseAbstractRepository<Empleado> {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadosRepository: Repository<Empleado>
  ) {
    super(empleadosRepository)
  }
}
