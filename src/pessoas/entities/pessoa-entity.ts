import { IsEmail } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ unique: true })
  @IsEmail()
  email!: string;

  @Column({ length: 255 })
  passwordHash!: string;

  @Column({ length: 100 })
  nome: string = 'test';

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}