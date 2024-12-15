import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Nomina} from './entities/nomina.entity'
import {NominaController} from './controller/nomina.controller'
import {NominaService} from './services/nomina.service'
import {NominaRepository} from './repository/nomina.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Nomina])],
  providers: [NominaService, NominaRepository],
  exports: [NominaService],
  controllers: [NominaController],
})
export class NominaModule {}
