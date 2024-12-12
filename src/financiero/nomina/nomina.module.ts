import {Module} from '@nestjs/common'
import {NominaService} from './services/nomina.service'
import {NominaController} from './controller/nomina.controller'

@Module({
  controllers: [NominaController],
  providers: [NominaService],
})
export class NominaModule {}
