import { IsEmail } from 'class-validator';
import { Recado } from 'src/recados/entities/recados.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ unique: true })
  @IsEmail()
  email: string | undefined;

  @Column({ length: 255 })
  passwordHash: string | undefined;

  @Column({ length: 100 })
  nome: string | undefined;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
    // Uma pessoa pode ter enviado muitos recados (como "de")
  // Esses recados são relacionados ao campo "de" na entidade recado
  @OneToMany(() => Recado, recado => recado.de)
  recadosEnviados: Recado[] | undefined;

  // Uma pessoa pode ter recebido muitos recados (como "para")
  // Esses recados são relacionados ao campo "para" na entidade recado
  @OneToMany(() => Recado, recado => recado.para)
  recadosRecebidos: Recado[] | undefined;
}