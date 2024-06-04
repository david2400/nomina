import {Module} from '@nestjs/common'
import {ContratoModule} from './contrato/contrato.module'
import {TipoContratoModule} from './tipo-contrato/tipo-contrato.module'
import {AspiranteModule} from './aspirante/aspirante.module'
import {EntrevistasModule} from './entrevistas/entrevistas.module'
import {EmpleadosModule} from './empleados/empleados.module'
import {JornadaModule} from './jornada/jornada.module'
import {AntecedentesModule} from './antecedentes/antecedentes.module'
import {CargosModule} from './cargos/cargos.module'
import {ReferenciasModule} from './referencias/referencias.module'
import {EmpresaModule} from './empresa/empresa.module'
import {HabitosModule} from './habitos/habitos.module'
import {AreaLaboralModule} from './area-laboral/area-laboral.module'

@Module({
  imports: [
    ContratoModule,
    TipoContratoModule,
    AspiranteModule,
    EntrevistasModule,
    EmpleadosModule,
    JornadaModule,
    AntecedentesModule,
    CargosModule,
    ReferenciasModule,
    EmpresaModule,
    HabitosModule,
    AreaLaboralModule,
  ],
})
export class ContratacionModule {}
