import {Module} from '@nestjs/common'
import {AspirantesService} from './services/aspirantes.service'
import {AspirantesController} from './controller/aspirantes.controller'

@Module({
  controllers: [AspirantesController],
  providers: [AspirantesService],
})
export class AspirantesModule {}
