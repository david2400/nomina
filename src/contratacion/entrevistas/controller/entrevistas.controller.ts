import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {EntrevistasService} from '../services/entrevistas.service'
import {CreateEntrevistaDto} from '../dto/create-entrevista.dto'
import {UpdateEntrevistaDto} from '../dto/update-entrevista.dto'

@Controller('entrevistas')
export class EntrevistasController {
  constructor(private readonly entrevistasService: EntrevistasService) {}

  @Post()
  create(@Body() createEntrevistaDto: CreateEntrevistaDto) {
    return this.entrevistasService.create(createEntrevistaDto)
  }

  @Get()
  findAll() {
    return this.entrevistasService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entrevistasService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntrevistaDto: UpdateEntrevistaDto) {
    return this.entrevistasService.update(+id, updateEntrevistaDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrevistasService.remove(+id)
  }
}
