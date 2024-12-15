import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Pension} from './entities/pension.entity'
import {PensionController} from './controller/pension.controller'
import {PensionService} from './services/pension.service'
import {PensionRepository} from './repository/pension.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Pension])],
  providers: [PensionService, PensionRepository],
  exports: [PensionService],
  controllers: [PensionController],
})
export class PensionModule {}
