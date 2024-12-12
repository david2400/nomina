import {Module} from '@nestjs/common'
import {JornadasService} from './services/jornadas.service'
import {JornadasController} from './controller/jornadas.controller'

@Module({
  controllers: [JornadasController],
  providers: [JornadasService],
})
export class JornadasModule {}
