import {
  Controller,
  Get,
  Patch,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';

type UpdateUserDto = Record<string, unknown>;
type AuthRequest = Request & { user: { id: number } };

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /users/me
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getMyProfile(@Req() req: AuthRequest) {
    // req.user contains the authenticated user (set by JwtStrategy)
    return this.userService.findById(req.user.id);
  }

  // PATCH /users/me
  @UseGuards(AuthGuard('jwt'))
  @Patch('me')
  async updateMyProfile(@Req() req: AuthRequest, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(req.user.id, dto);
  }

  // GET /users/:id (public or protected?)
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.findById(+id);
  }
}
