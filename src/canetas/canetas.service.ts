import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateCanetaDto } from './dto/create-caneta.dto';
import { UpdateCanetaDto } from './dto/update-caneta.dto';
import { Caneta } from './entities/caneta.entity';
import { validate } from 'class-validator';

@Injectable()
export class CanetasService {
  constructor(
    @InjectRepository(Caneta)
    private canetasRespository: Repository<Caneta>,
  ) {}

  async create(createCanetaDto: CreateCanetaDto) {
    createCanetaDto.price = +createCanetaDto.price
    const caneta = this.canetasRespository.create(createCanetaDto);
    if (await this.validateCaneta(caneta) === 0) {
      return this.canetasRespository.save(caneta);
    }
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

  getForm() {
    return `<form action="/canetas" method="post">
    <label for="name">name:</label>
    <input type="text" id="name" name="name"><br><br>
    <label for="image">image:</label>
    <input type="text" id="image" name="image"><br><br>
    <label for="price">price:</label>
    <input type="number" id="price" name="price"><br><br>
    <input type="submit" value="Submit">
    
  </form>`
  }

  imageFormat(canetas: Caneta[]) {
    let out = "";
    for (let caneta of canetas) {
      out = out + `<img src="${caneta.image}" style="width: 10%">`
    }
    return out
  }

  async validateCaneta(caneta: Caneta) {
    const errors = await validate(caneta)
    if (errors.length > 0) {
      throw new BadRequestException(); 
    }
    return 0
  }
}
