// auth.controller.ts
import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import type { Request } from 'express';

type AuthRequest = Request & { user: { id: number } };

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  profile(@Req() req: AuthRequest) {
    return this.authService.me(req.user.id);
  }
}
