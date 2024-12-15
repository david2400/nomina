import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Aspirante} from '../entities/aspirante.entity'
import {CreateAspiranteDto} from '../dto/create-aspirante.dto'
import {UpdateAspiranteDto} from '../dto/update-aspirante.dto'
import {AspirantesRepository} from '../repository/aspirantes'

@Injectable()
export class AspirantesService {
  constructor(private aspiranteRepository: AspirantesRepository) {}

  async createAspirante(aspirante: CreateAspiranteDto): Promise<any> {
    // const result = await this.findOneByRolename(aspirante)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The aspirante already registered!'}, HttpStatus.FOUND)
    // }
    const newAspirante = this.aspiranteRepository.create(aspirante)

    const results = await this.aspiranteRepository.save(newAspirante)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.aspiranteRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The aspirante does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.aspiranteRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The aspirante does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, aspirante: UpdateAspiranteDto): Promise<UpdateResult> {
    const newAspirante = this.aspiranteRepository.create(aspirante)

    const result = await this.aspiranteRepository.update(id, newAspirante)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The aspirante does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Aspirante> {
    const aspirante = await this.aspiranteRepository.findOne({
      where: {id: id},
    })
    return aspirante
  }

  async findAll(): Promise<Aspirante[]> {
    const result = await this.aspiranteRepository.find({withDeleted: true})
    return result
  }
}
