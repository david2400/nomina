import {Module} from '@nestjs/common'
import {ConfigsModule} from '@config/config.module'
import {FiltersModule} from '@/filters/filters.module'
import {ContratacionModule} from './contratacion/contratacion.module'
import {PrestacionSocialModule} from './prestacion-social/prestacion-social.module'
import {SeguridadSocialModule} from './seguridad-social/seguridad-social.module'
import {FinancieroModule} from './financiero/financiero.module'

@Module({
  providers: [FiltersModule],
  imports: [
    ConfigsModule,
    ContratacionModule,
    FinancieroModule,
    PrestacionSocialModule,
    SeguridadSocialModule,
  ],
})
export class AppModule {}
