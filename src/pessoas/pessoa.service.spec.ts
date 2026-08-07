import { beforeEach, describe, it } from "node:test"

import { PessoasService } from "./pessoa.service";
import { HashingService } from "src/hashing/hashing.service";
import { Pessoa } from "./entities/pessoa-entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from "typeorm";

describe('PessoaService', () => {
  let pessoaService: PessoasService;
  let pessoaRepository: Repository<Pessoa>;
  let hashingService: HashingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PessoasService,
        {
          provide: getRepositoryToken(Pessoa),
          useValue: {},
        },
        {
          provide: HashingService,
          useValue: {},
        },
      ],
    }).compile();

    pessoaService = module.get<PessoasService>(PessoasService)
    pessoaRepository = module.get<Repository<Pessoa>>(
        getRepositoryToken(Pessoa)
    )
    hashingService = module.get<HashingService>(HashingService)

  });
    it('pessoaService deve estar definido', () => {
    expect(pessoaService).toBeDefined();
  });
  
});
