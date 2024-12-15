import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Concepto} from './entities/concepto.entity'
import {ConceptosController} from './controller/conceptos.controller'
import {ConceptosService} from './services/conceptos.service'
import {ConceptosRepository} from './repository/conceptos.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Concepto])],
  providers: [ConceptosService, ConceptosRepository],
  exports: [ConceptosService],
  controllers: [ConceptosController],
})
export class ConceptosModule {}
