import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {CreateCesantiaDto} from '../dto/create-cesantia.dto'
import {UpdateCesantiaDto} from '../dto/update-cesantia.dto'
import {Cesantia} from '../entities/cesantia.entity'
import {CesantiasRepository} from '../repository/censantias.repository'
import {UpdateResult} from 'typeorm'

@Injectable()
export class CesantiasService {
  constructor(private conceptosRepository: CesantiasRepository) {}

  async createCesantias(cesantias: CreateCesantiaDto): Promise<any> {
    // const result = await this.findOneByRolename(cesantias)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The cesantias already registered!'}, HttpStatus.FOUND)
    // }
    const newCesantias = this.conceptosRepository.create(cesantias)

    const results = await this.conceptosRepository.save(newCesantias)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.conceptosRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The cesantias does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.conceptosRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The cesantias does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, cesantias: UpdateCesantiaDto): Promise<UpdateResult> {
    const newCesantias = this.conceptosRepository.create(cesantias)

    const result = await this.conceptosRepository.update(id, newCesantias)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The cesantias does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Cesantia> {
    const cesantias = await this.conceptosRepository.findOne({
      where: {id: id},
    })
    return cesantias
  }

  async findAll(): Promise<Cesantia[]> {
    const result = await this.conceptosRepository.find({withDeleted: true})
    return result
  }
}
