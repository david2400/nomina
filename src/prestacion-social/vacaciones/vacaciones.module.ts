import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Vacacion} from './entities/vacacion.entity'
import {VacacionesController} from './controller/vacaciones.controller'
import {VacacionesService} from './services/vacaciones.service'
import {VacacionesRepository} from './repository/vacaciones.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Vacacion])],
  providers: [VacacionesService, VacacionesRepository],
  exports: [VacacionesService],
  controllers: [VacacionesController],
})
export class VacacionesModule {}
