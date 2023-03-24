import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authSErvie: AuthService){}

    @Post('login')
    login(){
        return this.authSErvie.login();
    }

    @Post('register')
    register(){
        return this.authSErvie.register();
    }
}
