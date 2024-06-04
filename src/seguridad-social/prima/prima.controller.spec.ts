import { Test, TestingModule } from '@nestjs/testing';
import { PrimaController } from './prima.controller';
import { PrimaService } from './prima.service';

describe('PrimaController', () => {
  let controller: PrimaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimaController],
      providers: [PrimaService],
    }).compile();

    controller = module.get<PrimaController>(PrimaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
