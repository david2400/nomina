import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {CreateConceptoDto} from '../dto/create-concepto.dto'
import {UpdateConceptoDto} from '../dto/update-concepto.dto'
import {UpdateResult} from 'typeorm'
import {ConceptosRepository} from '../repository/conceptos.repository'
import {Concepto} from '../entities/concepto.entity'

@Injectable()
export class ConceptosService {
  constructor(private conceptosRepository: ConceptosRepository) {}

  async createConceptos(conceptos: CreateConceptoDto): Promise<any> {
    // const result = await this.findOneByRolename(conceptos)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The conceptos already registered!'}, HttpStatus.FOUND)
    // }
    const newConceptos = this.conceptosRepository.create(conceptos)

    const results = await this.conceptosRepository.save(newConceptos)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.conceptosRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The conceptos does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.conceptosRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The conceptos does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, conceptos: UpdateConceptoDto): Promise<UpdateResult> {
    const newConceptos = this.conceptosRepository.create(conceptos)

    const result = await this.conceptosRepository.update(id, newConceptos)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The conceptos does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Concepto> {
    const conceptos = await this.conceptosRepository.findOne({
      where: {id: id},
    })
    return conceptos
  }

  async findAll(): Promise<Concepto[]> {
    const result = await this.conceptosRepository.find({withDeleted: true})
    return result
  }
}
