import { Pessoa } from "src/pessoas/entities/pessoa-entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recado {
  @PrimaryGeneratedColumn()
  id : number;

  @Column({type: 'varchar', length: 255})
  texto: string;
  

  @Column({default: false})
  lido: boolean;

  @Column()
  data: Date;

  @CreateDateColumn()
  createAt?: Date

  @CreateDateColumn()
  updateAt?: Date

 // Muitos recados podem ser enviados por uma única pessoa (emissor)
 @ManyToOne(() => Pessoa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  // Especifica a coluna "de" que armazena o ID da pessoa que enviou o recado
  @JoinColumn({ name: 'de' })
  de: Pessoa;

  // Muitos recados podem ser enviados para uma única pessoa (destinatário) FK
   @ManyToOne(() => Pessoa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  // Especifica a coluna "para" que armazena o ID da pessoa que recebe o recado FK
  @JoinColumn({ name: 'para' })
  para: Pessoa;
}