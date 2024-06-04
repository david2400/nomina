import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AspiranteService } from '../services/aspirante.service';
import { CreateAspiranteDto } from '../dto/create-aspirante.dto';
import { UpdateAspiranteDto } from '../dto/update-aspirante.dto';

@Controller('aspirante')
export class AspiranteController {
  constructor(private readonly aspiranteService: AspiranteService) {}

  @Post()
  create(@Body() createAspiranteDto: CreateAspiranteDto) {
    return this.aspiranteService.create(createAspiranteDto);
  }

  @Get()
  findAll() {
    return this.aspiranteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aspiranteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAspiranteDto: UpdateAspiranteDto) {
    return this.aspiranteService.update(+id, updateAspiranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aspiranteService.remove(+id);
  }
}
