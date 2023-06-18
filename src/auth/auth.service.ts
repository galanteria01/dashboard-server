import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(): string {
    return "Logging in"
  }

  signin(): string {
    return "Logging in"
  }
}