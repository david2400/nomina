import { Injectable } from '@nestjs/common';
import { CreatePrimaDto } from './dto/create-prima.dto';
import { UpdatePrimaDto } from './dto/update-prima.dto';

@Injectable()
export class PrimaService {
  create(createPrimaDto: CreatePrimaDto) {
    return 'This action adds a new prima';
  }

  findAll() {
    return `This action returns all prima`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prima`;
  }

  update(id: number, updatePrimaDto: UpdatePrimaDto) {
    return `This action updates a #${id} prima`;
  }

  remove(id: number) {
    return `This action removes a #${id} prima`;
  }
}
