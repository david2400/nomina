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
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common'
import {AntecedentesService} from '../services/antecedentes.service'
import {CreateAntecedenteDto} from '../dto/create-antecedente.dto'
import {UpdateAntecedenteDto} from '../dto/update-antecedente.dto'
import {ApiOperation, ApiResponse} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'

@Controller('antecedentes')
export class AntecedentesController {
  constructor(private readonly antecedentesService: AntecedentesService) {}

  @ApiOperation({summary: 'Crear aplicaciones para asignar permisos'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 201,
    description: 'success register',
    type: UpdateAntecedenteDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body(new ValidationPipe()) antecedentes: CreateAntecedenteDto) {
    const result = await this.antecedentesService.createAntecedentes(antecedentes)

    return result
  }

  @ApiOperation({summary: 'Crear aplicaciones para asignar permisos'})
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
    @Body(new ValidationPipe()) antecedentes: UpdateAntecedenteDto
  ) {
    const result = await this.antecedentesService.update(id, antecedentes)

    return result
  }

  @ApiOperation({summary: 'Eliminar aplicaciones para asignar permisos'})
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
    const result = await this.antecedentesService.delete(id)

    return result
  }

  @ApiOperation({summary: 'Restaurar aplicaciones'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateAntecedenteDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restore(@Param('id', ParseIntPipe) id: number) {
    const result = await this.antecedentesService.restore(id)

    return result
  }

  @ApiOperation({summary: 'Buscar todos los aplicaciones'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateAntecedenteDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.antecedentesService.findAll()

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
    type: UpdateAntecedenteDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.antecedentesService.findOne(id)

    return result
  }
}
