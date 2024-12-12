import {Injectable} from '@nestjs/common'
import {CreatePensionDto} from '../dto/create-pension.dto'
import {UpdatePensionDto} from '../dto/update-pension.dto'

@Injectable()
export class PensionService {
  create(createPensionDto: CreatePensionDto) {
    return 'This action adds a new pension'
  }

  findAll() {
    return `This action returns all pension`
  }

  findOne(id: number) {
    return `This action returns a #${id} pension`
  }

  update(id: number, updatePensionDto: UpdatePensionDto) {
    return `This action updates a #${id} pension`
  }

  remove(id: number) {
    return `This action removes a #${id} pension`
  }
}
