import { Controller, Get, Render, } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs'
import { Public } from './auth/auth.controller';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private style = fs.readFileSync('./public/style.css', 'utf-8')
  
  @Public()
  @Get() 
  getHello() {
    return this.appService.getHello()
  };

  @Public()
  @Get('style.css')
  getCss() {
    return this.style
  }

}

