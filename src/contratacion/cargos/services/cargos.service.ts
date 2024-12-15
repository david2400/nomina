import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Cargo} from '../entities/cargo.entity'
import {CreateCargoDto} from '../dto/create-cargo.dto'
import {UpdateCargoDto} from '../dto/update-cargo.dto'
import {CargosRepository} from '../repository/cargos.repository'

@Injectable()
export class CargosService {
  constructor(private cargoRepository: CargosRepository) {}

  async createCargo(cargos: CreateCargoDto): Promise<any> {
    // const result = await this.findOneByRolename(cargos)
    // if (result.length != 0) {
    //   throw new HttpException({message: 'The cargo already registered!'}, HttpStatus.FOUND)
    // }
    const newCargo = this.cargoRepository.create(cargos)

    const results = await this.cargoRepository.save(newCargo)
    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.cargoRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The cargo does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async restore(id: number) {
    const result = await this.cargoRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The cargo does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async update(id: number, cargos: UpdateCargoDto): Promise<UpdateResult> {
    const newCargo = this.cargoRepository.create(cargos)

    const result = await this.cargoRepository.update(id, newCargo)

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The cargo does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Cargo> {
    const cargos = await this.cargoRepository.findOne({
      where: {id: id},
    })
    return cargos
  }

  async findAll(): Promise<Cargo[]> {
    const result = await this.cargoRepository.find({withDeleted: true})
    return result
  }
}
