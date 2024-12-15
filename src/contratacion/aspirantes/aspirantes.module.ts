import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Aspirante} from './entities/aspirante.entity'
import {AspirantesController} from './controller/aspirantes.controller'
import {AspirantesService} from './services/aspirantes.service'
import {AspirantesRepository} from './repository/aspirantes'

@Module({
  imports: [TypeOrmModule.forFeature([Aspirante])],
  providers: [AspirantesService, AspirantesRepository],
  exports: [AspirantesService],
  controllers: [AspirantesController],
})
export class AspirantesModule {}
