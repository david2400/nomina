import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Empleado} from './entities/empleado.entity'
import {EmpleadosController} from './controller/empleados.controller'
import {EmpleadosService} from './services/empleados.service'
import {EmpleadosRepository} from './repository/empleados.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Empleado])],
  providers: [EmpleadosService, EmpleadosRepository],
  exports: [EmpleadosService],
  controllers: [EmpleadosController],
})
export class EmpleadosModule {}
