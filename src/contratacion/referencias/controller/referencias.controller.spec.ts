import { Test, TestingModule } from '@nestjs/testing';
import { ReferenciasController } from './referencias.controller';
import { ReferenciasService } from '../services/referencias.service';

describe('ReferenciasController', () => {
  let controller: ReferenciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferenciasController],
      providers: [ReferenciasService],
    }).compile();

    controller = module.get<ReferenciasController>(ReferenciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
