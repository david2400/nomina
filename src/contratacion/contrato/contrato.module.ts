import { Module } from '@nestjs/common';
import { ContratoService } from './services/contrato.service';
import { ContratoController } from './controller/contrato.controller';

@Module({
  controllers: [ContratoController],
  providers: [ContratoService]
})
export class ContratoModule {}
