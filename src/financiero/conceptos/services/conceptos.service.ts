import {Injectable} from '@nestjs/common'
import {CreateConceptoDto} from '../dto/create-concepto.dto'
import {UpdateConceptoDto} from '../dto/update-concepto.dto'

@Injectable()
export class ConceptosService {
  create(createConceptoDto: CreateConceptoDto) {
    return 'This action adds a new concepto'
  }

  findAll() {
    return `This action returns all conceptos`
  }

  findOne(id: number) {
    return `This action returns a #${id} concepto`
  }

  update(id: number, updateConceptoDto: UpdateConceptoDto) {
    return `This action updates a #${id} concepto`
  }

  remove(id: number) {
    return `This action removes a #${id} concepto`
  }
}
