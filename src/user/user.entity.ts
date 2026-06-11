import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany('Ride', (ride: any) => ride.creator)
  rides!: any[];

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  phone?: string;

  @Column()
  studentId!: string;

  @Column({ nullable: true })
  department?: string;

  @Column({ default: 'AIUB' })
  university!: string;

  @Column({ nullable: true })
  profileImage?: string;

  @Column({ default: false })
  isVerified!: boolean;

  @Column({ type: 'float', default: 0 })
  rating!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
