import { Module } from '@nestjs/common';
import { AntecedentesService } from './services/antecedentes.service';
import { AntecedentesController } from './controller/antecedentes.controller';

@Module({
  controllers: [AntecedentesController],
  providers: [AntecedentesService]
})
export class AntecedentesModule {}
