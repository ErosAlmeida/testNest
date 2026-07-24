import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa-entity';
import { PessoasController } from './pessoa.controller';
import { PessoasService } from './pessoa.service';
import { REMOVE_SPACES_REGEX } from 'src/common/constants/server-name.constant';
import { LetterLower } from 'src/common/regex/letterLower';
import { RegexFactory } from 'src/common/regex/regex.factory';


@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  controllers: [PessoasController],
  providers: [PessoasService,
    
    {
      provide: REMOVE_SPACES_REGEX,
      useClass: LetterLower,
      useFactory: async (regexFactory: RegexFactory) => {
        // Espera alguma coisa acontecer
        console.log('ESPERANDO: Vou aguardar a promise abaixo ser resolvida.');
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log('PRONTO: Vou aguardar a promise abaixo ser resolvida.');
      }
    },
  ],

   exports: [PessoasService],
})
export class PessoasModule {}