import { Module } from '@nestjs/common';
import { JornadaService } from './jornada.service';
import { JornadaController } from './controller/jornada.controller';

@Module({
  controllers: [JornadaController],
  providers: [JornadaService]
})
export class JornadaModule {}
