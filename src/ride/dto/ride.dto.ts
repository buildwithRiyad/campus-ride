import { IsString, IsNumber, IsOptional, IsDateString, IsEnum } from 'class-validator';
import { VehicleType } from '../entity/ride.entity';  // এন্টিটি থেকে ইম্পোর্ট

export class RideDto {
  @IsString()
  fromLocation!: string;

  @IsString()
  toLocation!: string;

  @IsDateString()
  departureTime!: string;

  @IsEnum(VehicleType)
  vehicleType!: VehicleType;

  @IsNumber()
  availableSeats!: number;

  @IsNumber()
  pricePerSeat!: number;

  @IsOptional()
  @IsString()
  note?: string;
}