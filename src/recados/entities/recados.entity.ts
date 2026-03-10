import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 255})
  texto: string;
  
  @Column({type: 'varchar', length: 50})
  de: string;

  @Column({type: 'varchar', length: 50})
  para: string;

  @Column({default: false})
  lido: boolean;

  @Column()
  data: Date;

  @CreateDateColumn()
  createAt?: Date

  @CreateDateColumn()
  updateAt?: Date
}