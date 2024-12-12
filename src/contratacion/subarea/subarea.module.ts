import {Module} from '@nestjs/common'
import {SubareaService} from './services/subarea.service'
import {SubareaController} from './controller/subarea.controller'

@Module({
  controllers: [SubareaController],
  providers: [SubareaService],
})
export class SubareaModule {}
