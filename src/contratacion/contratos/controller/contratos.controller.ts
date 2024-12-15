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
import {ApiOperation, ApiResponse} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {ContratosService} from '../services/contratos.service'
import {CreateContratoDto} from '../dto/create-contrato.dto'
import {UpdateContratoDto} from '../dto/update-contrato.dto'

@Controller('contrato')
export class ContratosController {
  constructor(private readonly contratosService: ContratosService) {}

  @ApiOperation({summary: 'Crear contratos'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 201,
    description: 'success register',
    type: UpdateContratoDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body(new ValidationPipe()) contratos: CreateContratoDto) {
    const result = await this.contratosService.createContrato(contratos)

    return result
  }

  @ApiOperation({summary: 'Crear contratos'})
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
    @Body(new ValidationPipe()) contratos: UpdateContratoDto
  ) {
    const result = await this.contratosService.update(id, contratos)

    return result
  }

  @ApiOperation({summary: 'Eliminar contratos'})
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
    const result = await this.contratosService.delete(id)

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
    type: UpdateContratoDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restore(@Param('id', ParseIntPipe) id: number) {
    const result = await this.contratosService.restore(id)

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
    type: UpdateContratoDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.contratosService.findAll()

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
    type: UpdateContratoDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.contratosService.findOne(id)

    return result
  }
}
