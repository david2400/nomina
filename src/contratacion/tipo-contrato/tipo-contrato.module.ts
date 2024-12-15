import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {TipoContrato} from './entities/tipo-contrato.entity'
import {TipoContratoController} from './controller/tipo-contrato.controller'
import {TipoContratoService} from './services/tipo-contrato.service'
import {TipoContratoRepository} from './repository/tipo-contrato.repository'

@Module({
  imports: [TypeOrmModule.forFeature([TipoContrato])],
  providers: [TipoContratoService, TipoContratoRepository],
  exports: [TipoContratoService],
  controllers: [TipoContratoController],
})
export class TipoContratoModule {}
