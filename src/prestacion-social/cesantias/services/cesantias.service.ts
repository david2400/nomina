import { Injectable } from '@nestjs/common';
import { CreateCesantiaDto } from '../dto/create-cesantia.dto';
import { UpdateCesantiaDto } from '../dto/update-cesantia.dto';

@Injectable()
export class CesantiasService {
  create(createCesantiaDto: CreateCesantiaDto) {
    return 'This action adds a new cesantia';
  }

  findAll() {
    return `This action returns all cesantias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cesantia`;
  }

  update(id: number, updateCesantiaDto: UpdateCesantiaDto) {
    return `This action updates a #${id} cesantia`;
  }

  remove(id: number) {
    return `This action removes a #${id} cesantia`;
  }
}
