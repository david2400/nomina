import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {NominaService} from '../services/nomina.service'
import {CreateNominaDto} from '../dto/create-nomina.dto'
import {UpdateNominaDto} from '../dto/update-nomina.dto'

@Controller('nomina')
export class NominaController {
  constructor(private readonly nominaService: NominaService) {}

  @Post()
  create(@Body() createNominaDto: CreateNominaDto) {
    return this.nominaService.create(createNominaDto)
  }

  @Get()
  findAll() {
    return this.nominaService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nominaService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNominaDto: UpdateNominaDto) {
    return this.nominaService.update(+id, updateNominaDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nominaService.remove(+id)
  }
}
