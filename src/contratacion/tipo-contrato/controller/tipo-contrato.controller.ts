import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoContratoService } from '../tipo-contrato.service';
import { CreateTipoContratoDto } from '../dto/create-tipo-contrato.dto';
import { UpdateTipoContratoDto } from '../dto/update-tipo-contrato.dto';

@Controller('tipo-contrato')
export class TipoContratoController {
  constructor(private readonly tipoContratoService: TipoContratoService) {}

  @Post()
  create(@Body() createTipoContratoDto: CreateTipoContratoDto) {
    return this.tipoContratoService.create(createTipoContratoDto);
  }

  @Get()
  findAll() {
    return this.tipoContratoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoContratoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoContratoDto: UpdateTipoContratoDto) {
    return this.tipoContratoService.update(+id, updateTipoContratoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoContratoService.remove(+id);
  }
}
