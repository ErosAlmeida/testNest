import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa-entity';
import { PessoasController } from './pessoa.controller';
import { PessoasService } from './pessoa.service';


@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  controllers: [PessoasController],
  providers: [PessoasService],
   exports: [PessoasService],
})
export class PessoasModule {}