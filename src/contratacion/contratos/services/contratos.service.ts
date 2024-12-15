import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Contrato} from '../entities/contrato.entity'
import {CreateContratoDto} from '../dto/create-contrato.dto'
import {UpdateContratoDto} from '../dto/update-contrato.dto'
import {ContratosRepository} from '../repository/contratos.repository'

@Injectable()
export class ContratosService {
  constructor(private contratoRepository: ContratosRepository) {}

  async createContrato(contratos: CreateContratoDto): Promise<any> {
    // const result = await this.findOneByRolename(contratos)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The contratos already registered!'}, HttpStatus.FOUND)
    // }
    const newContrato = this.contratoRepository.create(contratos)

    const results = await this.contratoRepository.save(newContrato)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.contratoRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The contratos does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.contratoRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The contratos does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, contratos: UpdateContratoDto): Promise<UpdateResult> {
    const newContrato = this.contratoRepository.create(contratos)

    const result = await this.contratoRepository.update(id, newContrato)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The contratos does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Contrato> {
    const contratos = await this.contratoRepository.findOne({
      where: {id: id},
    })
    return contratos
  }

  async findAll(): Promise<Contrato[]> {
    const result = await this.contratoRepository.find({withDeleted: true})
    return result
  }
}
