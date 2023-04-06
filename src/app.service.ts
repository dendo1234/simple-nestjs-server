import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World <a href="./auth/login">login</a>`;
  }
}
