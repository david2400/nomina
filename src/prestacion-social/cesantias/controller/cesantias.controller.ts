import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CesantiasService } from '../services/cesantias.service';
import { CreateCesantiaDto } from '../dto/create-cesantia.dto';
import { UpdateCesantiaDto } from '../dto/update-cesantia.dto';

@Controller('cesantias')
export class CesantiasController {
  constructor(private readonly cesantiasService: CesantiasService) {}

  @Post()
  create(@Body() createCesantiaDto: CreateCesantiaDto) {
    return this.cesantiasService.create(createCesantiaDto);
  }

  @Get()
  findAll() {
    return this.cesantiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cesantiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCesantiaDto: UpdateCesantiaDto) {
    return this.cesantiasService.update(+id, updateCesantiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cesantiasService.remove(+id);
  }
}
