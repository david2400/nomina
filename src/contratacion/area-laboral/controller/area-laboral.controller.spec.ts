import { Test, TestingModule } from '@nestjs/testing';
import { AreaLaboralController } from './area-laboral.controller';
import { AreaLaboralService } from '../services/area-laboral.service';

describe('AreaLaboralController', () => {
  let controller: AreaLaboralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreaLaboralController],
      providers: [AreaLaboralService],
    }).compile();

    controller = module.get<AreaLaboralController>(AreaLaboralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
