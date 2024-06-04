import {Test, TestingModule} from '@nestjs/testing'
import {AreaLaboralService} from './area-laboral.service'

describe('AreaLaboralService', () => {
  let service: AreaLaboralService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreaLaboralService],
    }).compile()

    service = module.get<AreaLaboralService>(AreaLaboralService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
