import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Nomina} from '../entities/nomina.entity'
import {CreateNominaDto} from '../dto/create-nomina.dto'
import {UpdateNominaDto} from '../dto/update-nomina.dto'
import {NominaRepository} from '../repository/nomina.repository'

@Injectable()
export class NominaService {
  constructor(private nominaRepository: NominaRepository) {}

  async createNomina(nomina: CreateNominaDto): Promise<any> {
    // const result = await this.findOneByRolename(nomina)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The nomina already registered!'}, HttpStatus.FOUND)
    // }
    const newNomina = this.nominaRepository.create(nomina)

    const results = await this.nominaRepository.save(newNomina)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.nominaRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The nomina does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.nominaRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The nomina does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, nomina: UpdateNominaDto): Promise<UpdateResult> {
    const newNomina = this.nominaRepository.create(nomina)

    const result = await this.nominaRepository.update(id, newNomina)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The nomina does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Nomina> {
    const nomina = await this.nominaRepository.findOne({
      where: {id: id},
    })
    return nomina
  }

  async findAll(): Promise<Nomina[]> {
    const result = await this.nominaRepository.find({withDeleted: true})
    return result
  }
}
