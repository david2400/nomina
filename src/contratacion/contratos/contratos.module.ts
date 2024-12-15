import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Contrato} from './entities/contrato.entity'
import {ContratosController} from './controller/contratos.controller'
import {ContratosService} from './services/contratos.service'
import {ContratosRepository} from './repository/contratos.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Contrato])],
  providers: [ContratosService, ContratosRepository],
  exports: [ContratosService],
  controllers: [ContratosController],
})
export class ContratosModule {}
