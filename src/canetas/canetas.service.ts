import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateCanetaDto } from './dto/create-caneta.dto';
import { UpdateCanetaDto } from './dto/update-caneta.dto';
import { Caneta } from './entities/caneta.entity';

@Injectable()
export class CanetasService {
  constructor(
    @InjectRepository(Caneta)
    private canetasRespository: Repository<Caneta>,
  ) {}

  create(createCanetaDto: CreateCanetaDto) {
    const caneta = this.canetasRespository.create(createCanetaDto);
    return this.canetasRespository.save(caneta);
  }

  findAll(): Promise<Caneta[]> {
    return this.canetasRespository.find();
  }

  findOne(name: string): Promise<Caneta> {
    return this.canetasRespository.findOneBy({ name });
  }

  update(name: string, updateCanetaDto: UpdateCanetaDto) {
    return this.canetasRespository.update(name, updateCanetaDto)
  }

  async remove(name: string): Promise<void> {
    await this.canetasRespository.delete(name)
  }

  imageFormat(canetas: Caneta[]) {
    let out = "";
    for (let caneta of canetas) {
      out = out + `<img src="${caneta.image}">`
    }
    return out
  }
}
