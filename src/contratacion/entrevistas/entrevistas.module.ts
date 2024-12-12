import {Module} from '@nestjs/common'
import {EntrevistasService} from './services/entrevistas.service'
import {EntrevistasController} from './controller/entrevistas.controller'

@Module({
  controllers: [EntrevistasController],
  providers: [EntrevistasService],
})
export class EntrevistasModule {}
