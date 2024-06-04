import { Injectable } from '@nestjs/common';
import { CreateEntrevistaDto } from '../dto/create-entrevista.dto';
import { UpdateEntrevistaDto } from '../dto/update-entrevista.dto';

@Injectable()
export class EntrevistasService {
  create(createEntrevistaDto: CreateEntrevistaDto) {
    return 'This action adds a new entrevista';
  }

  findAll() {
    return `This action returns all entrevistas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entrevista`;
  }

  update(id: number, updateEntrevistaDto: UpdateEntrevistaDto) {
    return `This action updates a #${id} entrevista`;
  }

  remove(id: number) {
    return `This action removes a #${id} entrevista`;
  }
}
