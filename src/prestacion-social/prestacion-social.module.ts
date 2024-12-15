import {Module} from '@nestjs/common'
import {CesantiasModule} from './cesantias/cesantias.module'
import {VacacionesModule} from './vacaciones/vacaciones.module'

@Module({
  imports: [CesantiasModule, VacacionesModule],
  exports: [CesantiasModule, VacacionesModule],
})
export class PrestacionSocialModule {}
