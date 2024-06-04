import { Module } from '@nestjs/common';
import { CargosService } from './services/cargos.service';
import { CargosController } from './controller/cargos.controller';

@Module({
  controllers: [CargosController],
  providers: [CargosService]
})
export class CargosModule {}
