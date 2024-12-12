import {Module} from '@nestjs/common'
import {ContratosModule} from './contratos/contratos.module'
import {TipoContratoModule} from './tipo-contrato/tipo-contrato.module'
import {AspirantesModule} from './aspirantes/aspirantes.module'
import {EntrevistasModule} from './entrevistas/entrevistas.module'
import {EmpleadosModule} from './empleados/empleados.module'
import {JornadasModule} from './jornadas/jornadas.module'
import {AntecedentesModule} from './antecedentes/antecedentes.module'
import {CargosModule} from './cargos/cargos.module'
import {ReferenciasModule} from './referencias/referencias.module'
import {HabitosModule} from './habitos/habitos.module'
import {AreaLaboralModule} from './area-laboral/area-laboral.module'
import {SubareaModule} from './subarea/subarea.module'

@Module({
  imports: [
    ContratosModule,
    TipoContratoModule,
    AspirantesModule,
    EntrevistasModule,
    EmpleadosModule,
    JornadasModule,
    AntecedentesModule,
    CargosModule,
    ReferenciasModule,
    HabitosModule,
    AreaLaboralModule,
    SubareaModule,
  ],
  exports: [
    ContratosModule,
    TipoContratoModule,
    AspirantesModule,
    EntrevistasModule,
    EmpleadosModule,
    JornadasModule,
    AntecedentesModule,
    CargosModule,
    ReferenciasModule,
    HabitosModule,
    AreaLaboralModule,
    SubareaModule,
  ],
})
export class ContratacionModule {}
