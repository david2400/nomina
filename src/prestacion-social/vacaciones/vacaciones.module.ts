import {Module} from '@nestjs/common'
import {VacacionesService} from './services/vacaciones.service'
import {VacacionesController} from './controller/vacaciones.controller'

@Module({
  controllers: [VacacionesController],
  providers: [VacacionesService],
})
export class VacacionesModule {}
