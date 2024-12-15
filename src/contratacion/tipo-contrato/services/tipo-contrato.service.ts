import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {CreateTipoContratoDto} from '../dto/create-tipo-contrato.dto'
import {UpdateTipoContratoDto} from '../dto/update-tipo-contrato.dto'
import {TipoContratoRepository} from '../repository/tipo-contrato.repository'
import {UpdateResult} from 'typeorm'
import {TipoContrato} from '../entities/tipo-contrato.entity'

@Injectable()
export class TipoContratoService {
  constructor(private tipoContratoRepository: TipoContratoRepository) {}

  async createTipoContrato(empleado: CreateTipoContratoDto): Promise<any> {
    // const result = await this.findOneByRolename(empleado)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The tipo de contrato already registered!'}, HttpStatus.FOUND)
    // }
    const newTipoContrato = this.tipoContratoRepository.create(empleado)

    const results = await this.tipoContratoRepository.save(newTipoContrato)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.tipoContratoRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The tipo de contrato does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.tipoContratoRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The tipo de contrato does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, empleado: UpdateTipoContratoDto): Promise<UpdateResult> {
    const newTipoContrato = this.tipoContratoRepository.create(empleado)

    const result = await this.tipoContratoRepository.update(id, newTipoContrato)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The tipo de contrato does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<TipoContrato> {
    const empleado = await this.tipoContratoRepository.findOne({
      where: {id: id},
    })
    return empleado
  }

  async findAll(): Promise<TipoContrato[]> {
    const result = await this.tipoContratoRepository.find({withDeleted: true})
    return result
  }
}
