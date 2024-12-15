import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Antecedente} from './entities/antecedente.entity'
import {AntecedentesController} from './controller/antecedentes.controller'
import {AntecedentesService} from './services/antecedentes.service'
import {AntecedentesRepository} from './repository/antecedentes.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Antecedente])],
  providers: [AntecedentesService, AntecedentesRepository],
  exports: [AntecedentesService],
  controllers: [AntecedentesController],
})
export class AntecedentesModule {}
