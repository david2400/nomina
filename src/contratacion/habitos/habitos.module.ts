import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Habito} from './entities/habito.entity'
import {HabitosController} from './controller/habitos.controller'
import {HabitosService} from './services/habitos.service'
import {HabitosRepository} from './repository/habitos.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Habito])],
  providers: [HabitosService, HabitosRepository],
  exports: [HabitosService],
  controllers: [HabitosController],
})
export class HabitosModule {}
