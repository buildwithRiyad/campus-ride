import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { RideController } from './ride.controller';
import { RideService } from './ride.service';
import { Ride } from './entity/ride.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ride]), AuthModule],
  controllers: [RideController],
  providers: [RideService],
  exports: [RideService],
})
export class RideModule {}