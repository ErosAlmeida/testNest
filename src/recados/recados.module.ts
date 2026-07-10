import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecadosService } from './recados.service';
import { RecadosController } from './recados.controller';
import { Recado } from './entities/recados.entity';
import { PessoasModule } from 'src/pessoas/pessoa.module';


@Module({
  imports: [TypeOrmModule.forFeature([Recado]), PessoasModule],
  controllers: [RecadosController],
  providers: [RecadosService],
})
export class RecadosModule {}