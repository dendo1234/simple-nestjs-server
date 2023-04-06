import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as fs from 'fs'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
      ) {}
    
    private loginPage = fs.readFileSync('./public/login.html', 'utf-8')

    async signIn(username, pass) {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
        throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.id };
    return {
        access_token: await this.jwtService.signAsync(payload),
    };
    }

    getSignIn() {
        return this.loginPage
    }
}
