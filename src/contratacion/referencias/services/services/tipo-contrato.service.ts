import { Injectable } from '@nestjs/common';
import { CreateTipoContratoDto } from './dto/create-tipo-contrato.dto';
import { UpdateTipoContratoDto } from './dto/update-tipo-contrato.dto';

@Injectable()
export class TipoContratoService {
  create(createTipoContratoDto: CreateTipoContratoDto) {
    return 'This action adds a new tipoContrato';
  }

  findAll() {
    return `This action returns all tipoContrato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoContrato`;
  }

  update(id: number, updateTipoContratoDto: UpdateTipoContratoDto) {
    return `This action updates a #${id} tipoContrato`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoContrato`;
  }
}
