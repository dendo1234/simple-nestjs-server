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
  async findAll() {
    const form = this.canetasService.getForm();
    const canetas = await this.canetasService.findAll();
    return form + this.canetasService.imageFormat(canetas);
  }

  @Get(':id')
  async findOne(@Param('id') name: string) {
    const caneta = this.canetasService.findOne(name);
    return this.canetasService.imageFormat([ await caneta ]);
  }

  @Patch(':id')
  update(@Param('id') name: string, @Body() updateCanetaDto: UpdateCanetaDto) {
    return this.canetasService.update(name, updateCanetaDto);
  }

  @Delete(':id')
  remove(@Param('id') name: string) {
    return this.canetasService.remove(name);
  }
}


