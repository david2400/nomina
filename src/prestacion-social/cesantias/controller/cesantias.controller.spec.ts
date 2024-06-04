import { Test, TestingModule } from '@nestjs/testing';
import { CesantiasController } from './cesantias.controller';
import { CesantiasService } from '../services/cesantias.service';

describe('CesantiasController', () => {
  let controller: CesantiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CesantiasController],
      providers: [CesantiasService],
    }).compile();

    controller = module.get<CesantiasController>(CesantiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
