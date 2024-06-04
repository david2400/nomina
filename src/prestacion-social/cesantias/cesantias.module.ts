import { Module } from '@nestjs/common';
import { CesantiasService } from './services/cesantias.service';
import { CesantiasController } from './controller/cesantias.controller';

@Module({
  controllers: [CesantiasController],
  providers: [CesantiasService]
})
export class CesantiasModule {}
