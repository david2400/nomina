import {Module} from '@nestjs/common'
import {PrimaService} from './services/prima.service'
import {PrimaController} from './controller/prima.controller'

@Module({
  controllers: [PrimaController],
  providers: [PrimaService],
})
export class PrimaModule {}
