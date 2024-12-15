import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Subarea} from '../entities/subarea.entity'
import {CreateSubareaDto} from '../dto/create-subarea.dto'
import {UpdateSubareaDto} from '../dto/update-subarea.dto'
import {SubareaRepository} from '../repository/subarea.repository'

@Injectable()
export class SubareaService {
  constructor(private subareaRepository: SubareaRepository) {}

  async createSubarea(subarea: CreateSubareaDto): Promise<any> {
    // const result = await this.findOneByRolename(subarea)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The subarea already registered!'}, HttpStatus.FOUND)
    // }
    const newSubarea = this.subareaRepository.create(subarea)

    const results = await this.subareaRepository.save(newSubarea)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.subareaRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The subarea does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.subareaRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The subarea does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, subarea: UpdateSubareaDto): Promise<UpdateResult> {
    const newSubarea = this.subareaRepository.create(subarea)

    const result = await this.subareaRepository.update(id, newSubarea)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The subarea does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Subarea> {
    const subarea = await this.subareaRepository.findOne({
      where: {id: id},
    })
    return subarea
  }

  async findAll(): Promise<Subarea[]> {
    const result = await this.subareaRepository.find({withDeleted: true})
    return result
  }
}
