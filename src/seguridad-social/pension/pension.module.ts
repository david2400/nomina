import {Module} from '@nestjs/common'
import {PensionService} from './services/pension.service'
import {PensionController} from './controller/pension.controller'

@Module({
  controllers: [PensionController],
  providers: [PensionService],
})
export class PensionModule {}
