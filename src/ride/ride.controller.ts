import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { RideService } from './ride.service';
import { RideDto } from './dto/ride.dto';

interface RequestWithUser extends Request {
  user: { id: number; email: string };
}

@Controller('rides')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  createRide(@Req() req: RequestWithUser, @Body() dto: RideDto) {
    // শুধু userId পাঠানো হচ্ছে (email প্রয়োজন নেই)
    return this.rideService.createRide(req.user.id, dto);
  }

  @Get()
  getAllRides() {
    return this.rideService.getAllRides();
  }

  @Get(':id')
  getRideById(@Param('id') id: string) {
    return this.rideService.getRideById(id);
  }
}