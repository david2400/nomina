import {Test, TestingModule} from '@nestjs/testing'
import {CargosService} from '../services/cargos.service'

describe('CargosService', () => {
  let service: CargosService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CargosService],
    }).compile()

    service = module.get<CargosService>(CargosService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
