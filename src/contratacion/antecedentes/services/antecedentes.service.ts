import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {CreateAntecedenteDto} from '../dto/create-antecedente.dto'
import {UpdateAntecedenteDto} from '../dto/update-antecedente.dto'
import {AntecedentesRepository} from '../repository/antecedentes.repository'
import {UpdateResult} from 'typeorm'
import {Antecedente} from '../entities/antecedente.entity'

@Injectable()
export class AntecedentesService {
  constructor(private antecedentesRepository: AntecedentesRepository) {}

  async createAntecedentes(antecedentes: CreateAntecedenteDto): Promise<any> {
    // const result = await this.findOneByRolename(antecedentes)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The Aplication already registered!'}, HttpStatus.FOUND)
    // }
    const newPermission = this.antecedentesRepository.create(antecedentes)

    const results = await this.antecedentesRepository.save(newPermission)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.antecedentesRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The Aplication does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.antecedentesRepository.recover({id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The Aplication does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, antecedentes: UpdateAntecedenteDto): Promise<UpdateResult> {
    const newPermission = this.antecedentesRepository.create(antecedentes)

    const result = await this.antecedentesRepository.update(id, newPermission)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The Aplication does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Antecedente> {
    const antecedentes = await this.antecedentesRepository.findOne({
      where: {id: id},
    })
    return antecedentes
  }

  async findAll(): Promise<Antecedente[]> {
    const result = await this.antecedentesRepository.find({withDeleted: true})
    return result
  }
}
