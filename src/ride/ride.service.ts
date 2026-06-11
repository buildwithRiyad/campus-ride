import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ride, RideStatus } from './entity/ride.entity';
import { RideDto } from './dto/ride.dto';

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private readonly rideRepo: Repository<Ride>,
  ) {}

  async createRide(userId: number, dto: RideDto) {
    const ride = this.rideRepo.create({
      fromLocation: dto.fromLocation,
      toLocation: dto.toLocation,
      departureTime: new Date(dto.departureTime), // string → Date
      vehicleType: dto.vehicleType,
      availableSeats: dto.availableSeats,
      pricePerSeat: dto.pricePerSeat,
      note: dto.note,
      creatorId: userId, // সরাসরি foreign key কলাম ব্যবহার
    });
    return await this.rideRepo.save(ride);
  }

  async getAllRides() {
    return await this.rideRepo.find({
      where: { status: RideStatus.OPEN },
      relations: ['creator'],
      order: { createdAt: 'DESC' },
    });
  }

  async getRideById(id: string) {
    const ride = await this.rideRepo.findOne({
      where: { id },
      relations: ['creator'],
    });
    if (!ride) throw new NotFoundException('Ride not found');
    return ride;
  }
}