import { Module } from '@nestjs/common';
import { ReferenciasService } from './services/referencias.service';
import { ReferenciasController } from './controller/referencias.controller';

@Module({
  controllers: [ReferenciasController],
  providers: [ReferenciasService]
})
export class ReferenciasModule {}
