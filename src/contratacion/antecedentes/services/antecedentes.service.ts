import { Injectable } from '@nestjs/common';
import { CreateAntecedenteDto } from '../dto/create-antecedente.dto';
import { UpdateAntecedenteDto } from '../dto/update-antecedente.dto';

@Injectable()
export class AntecedentesService {
  create(createAntecedenteDto: CreateAntecedenteDto) {
    return 'This action adds a new antecedente';
  }

  findAll() {
    return `This action returns all antecedentes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} antecedente`;
  }

  update(id: number, updateAntecedenteDto: UpdateAntecedenteDto) {
    return `This action updates a #${id} antecedente`;
  }

  remove(id: number) {
    return `This action removes a #${id} antecedente`;
  }
}
