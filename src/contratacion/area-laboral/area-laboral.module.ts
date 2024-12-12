import {Module} from '@nestjs/common'
import {AreaLaboralService} from './services/area-laboral.service'
import {AreaLaboralController} from './controller/area-laboral.controller'

@Module({
  controllers: [AreaLaboralController],
  providers: [AreaLaboralService],
})
export class AreaLaboralModule {}
