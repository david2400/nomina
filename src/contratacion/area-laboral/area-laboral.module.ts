import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AreaLaboral} from './entities/area-laboral.entity'
import {AreaLaboralController} from './controller/area-laboral.controller'
import {AreaLaboralService} from './services/area-laboral.service'
import {AreaLaboralRepository} from './repository/area-laboral.repository'

@Module({
  imports: [TypeOrmModule.forFeature([AreaLaboral])],
  providers: [AreaLaboralService, AreaLaboralRepository],
  exports: [AreaLaboralService],
  controllers: [AreaLaboralController],
})
export class AreaLaboralModule {}
