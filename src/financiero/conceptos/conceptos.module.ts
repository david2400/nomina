import {Module} from '@nestjs/common'
import {ConceptosService} from './services/conceptos.service'
import {ConceptosController} from './controller/conceptos.controller'

@Module({
  controllers: [ConceptosController],
  providers: [ConceptosService],
})
export class ConceptosModule {}
