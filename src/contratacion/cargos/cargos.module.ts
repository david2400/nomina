import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Cargo} from './entities/cargo.entity'
import {CargosController} from './controller/cargos.controller'
import {CargosService} from './services/cargos.service'
import {CargosRepository} from './repository/cargos.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Cargo])],
  providers: [CargosService, CargosRepository],
  exports: [CargosService],
  controllers: [CargosController],
})
export class CargosModule {}
