import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Habito} from '../entities/habito.entity'
import {CreateHabitoDto} from '../dto/create-habito.dto'
import {UpdateHabitoDto} from '../dto/update-habito.dto'
import {HabitosRepository} from '../repository/habitos.repository'

@Injectable()
export class HabitosService {
  constructor(private habitosRepository: HabitosRepository) {}

  async createHabitos(habitos: CreateHabitoDto): Promise<any> {
    // const result = await this.findOneByRolename(habitos)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The habitos already registered!'}, HttpStatus.FOUND)
    // }
    const newHabitos = this.habitosRepository.create(habitos)

    const results = await this.habitosRepository.save(newHabitos)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.habitosRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The habitos does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.habitosRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The habitos does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, habitos: UpdateHabitoDto): Promise<UpdateResult> {
    const newHabitos = this.habitosRepository.create(habitos)

    const result = await this.habitosRepository.update(id, newHabitos)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The habitos does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Habito> {
    const habitos = await this.habitosRepository.findOne({
      where: {id: id},
    })
    return habitos
  }

  async findAll(): Promise<Habito[]> {
    const result = await this.habitosRepository.find({withDeleted: true})
    return result
  }
}
