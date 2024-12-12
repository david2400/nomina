import {Module} from '@nestjs/common'
import {ContratosService} from './services/contratos.service'
import {ContratoController} from './controller/contrato.controller'

@Module({
  controllers: [ContratoController],
  providers: [ContratosService],
})
export class ContratosModule {}
