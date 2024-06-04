import {Test, TestingModule} from '@nestjs/testing'
import {CesantiasService} from './cesantias.service'

describe('CesantiasService', () => {
  let service: CesantiasService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CesantiasService],
    }).compile()

    service = module.get<CesantiasService>(CesantiasService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
