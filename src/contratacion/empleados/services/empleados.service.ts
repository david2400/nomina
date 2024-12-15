import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Empleado} from '../entities/empleado.entity'
import {CreateEmpleadoDto} from '../dto/create-empleado.dto'
import {UpdateEmpleadoDto} from '../dto/update-empleado.dto'
import {EmpleadosRepository} from '../repository/empleados.repository'

@Injectable()
export class EmpleadosService {
  constructor(private empleadoRepository: EmpleadosRepository) {}

  async createEmpleados(empleados: CreateEmpleadoDto): Promise<any> {
    // const result = await this.findOneByRolename(empleados)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The empleados already registered!'}, HttpStatus.FOUND)
    // }
    const newEmpleado = this.empleadoRepository.create(empleados)

    const results = await this.empleadoRepository.save(newEmpleado)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.empleadoRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The empleados does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.empleadoRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The empleados does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, empleados: UpdateEmpleadoDto): Promise<UpdateResult> {
    const newEmpleado = this.empleadoRepository.create(empleados)

    const result = await this.empleadoRepository.update(id, newEmpleado)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The empleados does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Empleado> {
    const empleados = await this.empleadoRepository.findOne({
      where: {id: id},
    })
    return empleados
  }

  async findAll(): Promise<Empleado[]> {
    const result = await this.empleadoRepository.find({withDeleted: true})
    return result
  }
}
