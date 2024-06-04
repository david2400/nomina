import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AreaLaboralService } from '../services/area-laboral.service';
import { CreateAreaLaboralDto } from '../dto/create-area-laboral.dto';
import { UpdateAreaLaboralDto } from '../dto/update-area-laboral.dto';

@Controller('area-laboral')
export class AreaLaboralController {
  constructor(private readonly areaLaboralService: AreaLaboralService) {}

  @Post()
  create(@Body() createAreaLaboralDto: CreateAreaLaboralDto) {
    return this.areaLaboralService.create(createAreaLaboralDto);
  }

  @Get()
  findAll() {
    return this.areaLaboralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.areaLaboralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAreaLaboralDto: UpdateAreaLaboralDto) {
    return this.areaLaboralService.update(+id, updateAreaLaboralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.areaLaboralService.remove(+id);
  }
}
