import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Subarea} from './entities/subarea.entity'
import {SubareaController} from './controller/subarea.controller'
import {SubareaService} from './services/subarea.service'
import {SubareaRepository} from './repository/subarea.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Subarea])],
  providers: [SubareaService, SubareaRepository],
  exports: [SubareaService],
  controllers: [SubareaController],
})
export class SubareaModule {}
