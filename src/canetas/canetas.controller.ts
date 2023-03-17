import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CanetasService } from './canetas.service';
import { CreateCanetaDto } from './dto/create-caneta.dto';
import { UpdateCanetaDto } from './dto/update-caneta.dto';

@Controller('canetas')
export class CanetasController {
  constructor(private readonly canetasService: CanetasService) {}

  @Post()
  create(@Body() createCanetaDto: CreateCanetaDto) {
    return this.canetasService.create(createCanetaDto);
  }

  @Get()
  findAll() {
    return this.canetasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') name: string) {
    return this.canetasService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id') name: string, @Body() updateCanetaDto: UpdateCanetaDto) {
    console.log(updateCanetaDto)
    return this.canetasService.update(name, updateCanetaDto);
  }

  @Delete(':id')
  remove(@Param('id') name: string) {
    return this.canetasService.remove(name);
  }
}


