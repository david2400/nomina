import {Module} from '@nestjs/common'
import {ConfigsModule} from '@config/config.module'
import {FiltersModule} from '@common/filters/filters.module'
import {VacacionesModule} from '@/src/prestacion-social/vacaciones/vacaciones.module'
import {PrestacionSocialModule} from './prestacion-social/prestacion-social.module'
import {CesantiasModule} from './prestacion-social/cesantias/cesantias.module'
import {PrimaModule} from './seguridad-social/prima/prima.module'
import {SeguridadSocialModule} from './seguridad-social/seguridad-social.module'

@Module({
  providers: [FiltersModule],
  imports: [
    ConfigsModule,
    VacacionesModule,
    PrestacionSocialModule,
    CesantiasModule,
    PrimaModule,
    SeguridadSocialModule,
  ],
})
export class AppModule {}
