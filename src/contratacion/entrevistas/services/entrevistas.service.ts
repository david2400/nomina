import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {CreateEntrevistaDto} from '../dto/create-entrevista.dto'
import {UpdateEntrevistaDto} from '../dto/update-entrevista.dto'
import {Entrevista} from '../entities/entrevista.entity'
import {EntrevistasRepository} from '../repository/entrevistas.repository'

@Injectable()
export class EntrevistasService {
  constructor(private entrevistaRepository: EntrevistasRepository) {}

  async createEntrevista(empleado: CreateEntrevistaDto): Promise<any> {
    // const result = await this.findOneByRolename(empleado)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The entrevista already registered!'}, HttpStatus.FOUND)
    // }
    const newEntrevista = this.entrevistaRepository.create(empleado)

    const results = await this.entrevistaRepository.save(newEntrevista)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.entrevistaRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The entrevista does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.entrevistaRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The entrevista does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, empleado: UpdateEntrevistaDto): Promise<UpdateResult> {
    const newEntrevista = this.entrevistaRepository.create(empleado)

    const result = await this.entrevistaRepository.update(id, newEntrevista)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The entrevista does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Entrevista> {
    const empleado = await this.entrevistaRepository.findOne({
      where: {id: id},
    })
    return empleado
  }

  async findAll(): Promise<Entrevista[]> {
    const result = await this.entrevistaRepository.find({withDeleted: true})
    return result
  }
}
