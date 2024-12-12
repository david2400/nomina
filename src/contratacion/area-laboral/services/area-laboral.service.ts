import {Injectable} from '@nestjs/common'
import {CreateAreaLaboralDto} from '../dto/create-area-laboral.dto'
import {UpdateAreaLaboralDto} from '../dto/update-area-laboral.dto'

@Injectable()
export class AreaLaboralService {
  create(createAreaLaboralDto: CreateAreaLaboralDto) {
    return 'This action adds a new areaLaboral'
  }

  findAll() {
    return `This action returns all areaLaboral`
  }

  findOne(id: number) {
    return `This action returns a #${id} areaLaboral`
  }

  update(id: number, updateAreaLaboralDto: UpdateAreaLaboralDto) {
    return `This action updates a #${id} areaLaboral`
  }

  remove(id: number) {
    return `This action removes a #${id} areaLaboral`
  }
}
