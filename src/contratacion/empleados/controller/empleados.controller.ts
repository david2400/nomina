import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common'
import {ApiOperation, ApiResponse} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {EmpleadosService} from '../services/empleados.service'
import {CreateEmpleadoDto} from '../dto/create-empleado.dto'
import {UpdateEmpleadoDto} from '../dto/update-empleado.dto'

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadoServices: EmpleadosService) {}

  @ApiOperation({summary: 'Crear empleados'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 201,
    description: 'success register',
    type: UpdateEmpleadoDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body(new ValidationPipe()) empleados: CreateEmpleadoDto) {
    const result = await this.empleadoServices.createEmpleados(empleados)

    return result
  }

  @ApiOperation({summary: 'Crear empleados'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateResult,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) empleados: UpdateEmpleadoDto
  ) {
    const result = await this.empleadoServices.update(id, empleados)

    return result
  }

  @ApiOperation({summary: 'Eliminar empleados'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success delete',
    type: UpdateResult,
  })

  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const result = await this.empleadoServices.delete(id)

    return result
  }

  @ApiOperation({summary: 'Restaurar empleados'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateEmpleadoDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restore(@Param('id', ParseIntPipe) id: number) {
    const result = await this.empleadoServices.restore(id)

    return result
  }

  @ApiOperation({summary: 'Buscar todos los empleados'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateEmpleadoDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.empleadoServices.findAll()

    return result
  }

  @ApiOperation({summary: 'Buscar aplicacion'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateEmpleadoDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.empleadoServices.findOne(id)

    return result
  }
}
