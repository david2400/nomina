import { Module } from '@nestjs/common';
import { AspiranteService } from './services/aspirante.service';
import { AspiranteController } from './controller/aspirante.controller';

@Module({
  controllers: [AspiranteController],
  providers: [AspiranteService]
})
export class AspiranteModule {}
