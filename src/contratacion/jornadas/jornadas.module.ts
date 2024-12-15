import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Jornada} from './entities/jornada.entity'
import {JornadasController} from './controller/jornadas.controller'
import {JornadasService} from './services/jornadas.service'
import {JornadasRepository} from './repository/jornadas.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Jornada])],
  providers: [JornadasService, JornadasRepository],
  exports: [JornadasService],
  controllers: [JornadasController],
})
export class JornadasModule {}
