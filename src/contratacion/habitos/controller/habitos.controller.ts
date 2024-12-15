import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common'
import {HabitosService} from '../services/habitos.service'
import {CreateHabitoDto} from '../dto/create-habito.dto'
import {UpdateHabitoDto} from '../dto/update-habito.dto'
import {ApiOperation, ApiResponse} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'

@Controller('habitos')
export class HabitosController {
  constructor(private readonly habitosServices: HabitosService) {}

  @ApiOperation({summary: 'Crear empleados'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 201,
    description: 'success register',
    type: UpdateHabitoDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body(new ValidationPipe()) habito: CreateHabitoDto) {
    const result = await this.habitosServices.createHabitos(habito)

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
    @Body(new ValidationPipe()) habito: UpdateHabitoDto
  ) {
    const result = await this.habitosServices.update(id, habito)

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
    const result = await this.habitosServices.delete(id)

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
    type: UpdateHabitoDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restore(@Param('id', ParseIntPipe) id: number) {
    const result = await this.habitosServices.restore(id)

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
    type: UpdateHabitoDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.habitosServices.findAll()

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
    type: UpdateHabitoDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.habitosServices.findOne(id)

    return result
  }
}
