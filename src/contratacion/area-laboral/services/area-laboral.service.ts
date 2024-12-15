import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {AreaLaboral} from '../entities/area-laboral.entity'
import {CreateAreaLaboralDto} from '../dto/create-area-laboral.dto'
import {UpdateAreaLaboralDto} from '../dto/update-area-laboral.dto'
import {AreaLaboralRepository} from '../repository/area-laboral.repository'

@Injectable()
export class AreaLaboralService {
  constructor(private areaLaboralRepository: AreaLaboralRepository) {}

  async createAreaLaboral(areaLaboral: CreateAreaLaboralDto): Promise<any> {
    // const result = await this.findOneByRolename(areaLaboral)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The area laboral already registered!'}, HttpStatus.FOUND)
    // }
    const newAreaLaboral = this.areaLaboralRepository.create(areaLaboral)

    const results = await this.areaLaboralRepository.save(newAreaLaboral)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.areaLaboralRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The area laboral does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.areaLaboralRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The area laboral does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, areaLaboral: UpdateAreaLaboralDto): Promise<UpdateResult> {
    const newAreaLaboral = this.areaLaboralRepository.create(areaLaboral)

    const result = await this.areaLaboralRepository.update(id, newAreaLaboral)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The area laboral does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<AreaLaboral> {
    const areaLaboral = await this.areaLaboralRepository.findOne({
      where: {id: id},
    })
    return areaLaboral
  }

  async findAll(): Promise<AreaLaboral[]> {
    const result = await this.areaLaboralRepository.find({withDeleted: true})
    return result
  }
}
