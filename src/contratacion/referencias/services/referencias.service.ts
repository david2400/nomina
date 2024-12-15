import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Referencia} from '../entities/referencia.entity'
import {CreateReferenciaDto} from '../dto/create-referencia.dto'
import {UpdateReferenciaDto} from '../dto/update-referencia.dto'
import {ReferenciasRepository} from '../repository/referencias.repository'

@Injectable()
export class ReferenciasService {
  constructor(private referenciasRepository: ReferenciasRepository) {}

  async createReferenciasPersonales(empleado: CreateReferenciaDto): Promise<any> {
    // const result = await this.findOneByRolename(empleado)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The la referencia personal already registered!'}, HttpStatus.FOUND)
    // }
    const newReferencia = this.referenciasRepository.create(empleado)

    const results = await this.referenciasRepository.save(newReferencia)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.referenciasRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The la referencia personal does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.referenciasRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The la referencia personal does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, empleado: UpdateReferenciaDto): Promise<UpdateResult> {
    const newReferencia = this.referenciasRepository.create(empleado)

    const result = await this.referenciasRepository.update(id, newReferencia)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The la referencia personal does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Referencia> {
    const empleado = await this.referenciasRepository.findOne({
      where: {id: id},
    })
    return empleado
  }

  async findAll(): Promise<Referencia[]> {
    const result = await this.referenciasRepository.find({withDeleted: true})
    return result
  }
}
