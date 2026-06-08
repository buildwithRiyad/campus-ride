import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  studentId!: string;

  @Column({ nullable: true })
  department!: string;

  @Column({ nullable: true })
  semester!: string;

  @Column({ default: 'AIUB' })
  university!: string;
}