import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Jornada} from '../entities/jornada.entity'
import {CreateJornadaDto} from '../dto/create-jornada.dto'
import {UpdateJornadaDto} from '../dto/update-jornada.dto'
import {JornadasRepository} from '../repository/jornadas.repository'

@Injectable()
export class JornadasService {
  constructor(private jornadaRepository: JornadasRepository) {}

  async createJornada(jornada: CreateJornadaDto): Promise<any> {
    // const result = await this.findOneByRolename(jornada)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The jornada laboral already registered!'}, HttpStatus.FOUND)
    // }
    const newJornada = this.jornadaRepository.create(jornada)

    const results = await this.jornadaRepository.save(newJornada)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.jornadaRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The jornada laboral does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.jornadaRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The jornada laboral does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, jornada: UpdateJornadaDto): Promise<UpdateResult> {
    const newJornada = this.jornadaRepository.create(jornada)

    const result = await this.jornadaRepository.update(id, newJornada)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The jornada laboral does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Jornada> {
    const jornada = await this.jornadaRepository.findOne({
      where: {id: id},
    })
    return jornada
  }

  async findAll(): Promise<Jornada[]> {
    const result = await this.jornadaRepository.find({withDeleted: true})
    return result
  }
}
