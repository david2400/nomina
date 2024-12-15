import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Entrevista} from './entities/entrevista.entity'
import {EntrevistasController} from './controller/entrevistas.controller'
import {EntrevistasService} from './services/entrevistas.service'
import {EntrevistasRepository} from './repository/entrevistas.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Entrevista])],
  providers: [EntrevistasService, EntrevistasRepository],
  exports: [EntrevistasService],
  controllers: [EntrevistasController],
})
export class EntrevistasModule {}
