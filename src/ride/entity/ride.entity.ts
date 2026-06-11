import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/user.entity';

export enum RideStatus {
  OPEN = 'OPEN',
  FULL = 'FULL',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum VehicleType {
  CAR = 'CAR',
  BIKE = 'BIKE',
  RICKSHAW = 'RICKSHAW',
  CNG = 'CNG',
}

@Entity('rides')
export class Ride {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  fromLocation!: string;

  @Column()
  toLocation!: string;

  @Column()
  departureTime!: Date;

  @Column({ type: 'enum', enum: VehicleType })
  vehicleType!: VehicleType;

  @Column()
  availableSeats!: number;

  @Column()
  pricePerSeat!: number;

  @Column({ nullable: true })
  note!: string;

  @Column({ type: 'enum', enum: RideStatus, default: RideStatus.OPEN })
  status!: RideStatus;

  // সরাসরি foreign key column (TypeORM relation-এর জন্য কিন্তু টাইপসেফ)
  @Column()
  creatorId!: number;

  @ManyToOne(() => User, (user) => user.rides)
  creator!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}