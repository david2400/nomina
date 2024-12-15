import {Module} from '@nestjs/common'
import {PensionModule} from './pension/pension.module'
import {PrimaModule} from './prima/prima.module'

@Module({
  imports: [PensionModule, PrimaModule],
  exports: [PensionModule, PrimaModule],
})
export class SeguridadSocialModule {}
