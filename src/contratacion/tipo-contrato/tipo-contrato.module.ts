import {Module} from '@nestjs/common'
import {TipoContratoService} from './services/tipo-contrato.service'
import {TipoContratoController} from './controller/tipo-contrato.controller'

@Module({
  controllers: [TipoContratoController],
  providers: [TipoContratoService],
})
export class TipoContratoModule {}
