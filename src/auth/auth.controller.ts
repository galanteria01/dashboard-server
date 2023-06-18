import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  login(): string {
    return this.authService.login()
  }

  @Post()
  signin(): string {
    return this.authService.signin()
  }
}