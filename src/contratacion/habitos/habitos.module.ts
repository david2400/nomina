import {Module} from '@nestjs/common'
import {HabitosService} from './services/habitos.service'
import {HabitosController} from './controller/habitos.controller'

@Module({
  controllers: [HabitosController],
  providers: [HabitosService],
})
export class HabitosModule {}
