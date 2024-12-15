import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Prima} from './entities/prima.entity'
import {PrimaController} from './controller/prima.controller'
import {PrimaService} from './services/prima.service'
import {PrimaRepository} from './repository/prima.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Prima])],
  providers: [PrimaService, PrimaRepository],
  exports: [PrimaService],
  controllers: [PrimaController],
})
export class PrimaModule {}
