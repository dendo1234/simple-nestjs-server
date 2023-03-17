import { Injectable } from '@nestjs/common';
import { CreateCanetaDto } from './dto/create-caneta.dto';
import { UpdateCanetaDto } from './dto/update-caneta.dto';

var canetas: CreateCanetaDto[] = [{"name": "azul", "image": "https://tse1.mm.bing.net/th?id=OIP.rb10ZS5P7kt5JZ5WP6W2vAHaHI&pid=Api"}, {"name": "verde", "image": "https://tse3.mm.bing.net/th?id=OIP.w0mITPidOIIHZdEOzaOmoQHaHa&pid=Api"}, {"name": "amarela", "image": "https://tse4.mm.bing.net/th?id=OIP.3UEJrMgrNgIYSry2df2EXwHaE7&pid=Api"}, {"name": "rosa", "image": "https://tse1.mm.bing.net/th?id=OIP.zvCzVdsCUk6Kz_2i9CkBTgHaHa&pid=Api"}]

@Injectable()
export class CanetasService {
  create(createCanetaDto: CreateCanetaDto) {
    canetas.push(createCanetaDto);
    return `Caneta ${createCanetaDto.name} criada`;
  }

  findAll() {
    let res: string = "";
    for (let caneta of canetas) {
      res = res + `<img src="${caneta.image}">`;
    }
    return res;
  }

  findOne(name: string) {
    for (let caneta of canetas){
      if (name === caneta.name) {
        return `<img src="${caneta.image}">`;
      }
    }
    return `Caneta not found!`;
  }

  update(name: string, updateCanetaDto: UpdateCanetaDto) {
    for (let caneta of canetas) {
      if (name === caneta.name) {
        caneta.image = updateCanetaDto.image;
        return `Caneta ${name} atualizada`;
      }
    }
    return `Caneta not found!`;
  }

  remove(name: string) {
    for (let i = 0; i < canetas.length; i++) {
      if (name === canetas[i].name) {
        canetas.splice(i,1);
        console.log(canetas);
        return `Caneta ${name} removida`;
      }
    }
    return `Caneta not found!`;
  }
}
