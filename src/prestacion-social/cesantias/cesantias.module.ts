import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Cesantia} from './entities/cesantia.entity'
import {CesantiasController} from './controller/cesantias.controller'
import {CesantiasService} from './services/cesantias.service'
import {CesantiasRepository} from './repository/censantias.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Cesantia])],
  providers: [CesantiasService, CesantiasRepository],
  exports: [CesantiasService],
  controllers: [CesantiasController],
})
export class CesantiasModule {}
