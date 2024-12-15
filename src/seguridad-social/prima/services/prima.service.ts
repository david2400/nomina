import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {CreatePrimaDto} from '../dto/create-prima.dto'
import {UpdatePrimaDto} from '../dto/update-prima.dto'
import {Prima} from '../entities/prima.entity'
import {PrimaRepository} from '../repository/prima.repository'
import {UpdateResult} from 'typeorm'

@Injectable()
export class PrimaService {
  constructor(private primaRepository: PrimaRepository) {}

  async createPrima(prima: CreatePrimaDto): Promise<any> {
    // const result = await this.findOneByRolename(prima)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The prima already registered!'}, HttpStatus.FOUND)
    // }
    const newPrima = this.primaRepository.create(prima)

    const results = await this.primaRepository.save(newPrima)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.primaRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The prima does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.primaRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The prima does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, prima: UpdatePrimaDto): Promise<UpdateResult> {
    const newPrima = this.primaRepository.create(prima)

    const result = await this.primaRepository.update(id, newPrima)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The prima does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Prima> {
    const prima = await this.primaRepository.findOne({
      where: {id: id},
    })
    return prima
  }

  async findAll(): Promise<Prima[]> {
    const result = await this.primaRepository.find({withDeleted: true})
    return result
  }
}
