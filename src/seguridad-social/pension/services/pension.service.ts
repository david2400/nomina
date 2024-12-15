import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Pension} from '../entities/pension.entity'
import {CreatePensionDto} from '../dto/create-pension.dto'
import {UpdatePensionDto} from '../dto/update-pension.dto'
import {PensionRepository} from '../repository/pension.repository'

@Injectable()
export class PensionService {
  constructor(private pensionRepository: PensionRepository) {}

  async createPension(pension: CreatePensionDto): Promise<any> {
    // const result = await this.findOneByRolename(pension)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The pension already registered!'}, HttpStatus.FOUND)
    // }
    const newPension = this.pensionRepository.create(pension)

    const results = await this.pensionRepository.save(newPension)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.pensionRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The pension does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.pensionRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The pension does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, pension: UpdatePensionDto): Promise<UpdateResult> {
    const newPension = this.pensionRepository.create(pension)

    const result = await this.pensionRepository.update(id, newPension)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The pension does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Pension> {
    const pension = await this.pensionRepository.findOne({
      where: {id: id},
    })
    return pension
  }

  async findAll(): Promise<Pension[]> {
    const result = await this.pensionRepository.find({withDeleted: true})
    return result
  }
}
