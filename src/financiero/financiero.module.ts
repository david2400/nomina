import {Module} from '@nestjs/common'
import {NominaModule} from './nomina/nomina.module'
import {ConceptosModule} from './conceptos/conceptos.module'

@Module({
  imports: [NominaModule, ConceptosModule],
  exports: [NominaModule, ConceptosModule],
})
export class FinancieroModule {}
