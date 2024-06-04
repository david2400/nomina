import { Test, TestingModule } from '@nestjs/testing';
import { JornadaController } from '../jornada.controller';
import { JornadaService } from '../jornada.service';

describe('JornadaController', () => {
  let controller: JornadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JornadaController],
      providers: [JornadaService],
    }).compile();

    controller = module.get<JornadaController>(JornadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
