import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrimaService } from './prima.service';
import { CreatePrimaDto } from './dto/create-prima.dto';
import { UpdatePrimaDto } from './dto/update-prima.dto';

@Controller('prima')
export class PrimaController {
  constructor(private readonly primaService: PrimaService) {}

  @Post()
  create(@Body() createPrimaDto: CreatePrimaDto) {
    return this.primaService.create(createPrimaDto);
  }

  @Get()
  findAll() {
    return this.primaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.primaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrimaDto: UpdatePrimaDto) {
    return this.primaService.update(+id, updatePrimaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.primaService.remove(+id);
  }
}
