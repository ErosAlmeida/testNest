import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa-entity';
import { PessoasController } from './pessoa.controller';
import { PessoasService } from './pessoa.service';
import { REMOVE_SPACES_REGEX } from 'src/common/constants/server-name.constant';
import { LetterLower } from 'src/common/regex/letterLower';


@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  controllers: [PessoasController],
  providers: [PessoasService,
    {
      provide: REMOVE_SPACES_REGEX,
      useClass: LetterLower,
    },
  ],
   exports: [PessoasService],
})
export class PessoasModule {}