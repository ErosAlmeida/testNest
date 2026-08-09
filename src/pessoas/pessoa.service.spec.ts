import { beforeEach, describe, it } from "node:test"

import { PessoasService } from "./pessoa.service";
import { HashingService } from "src/hashing/hashing.service";
import { Pessoa } from "./entities/pessoa-entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from "typeorm";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";

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
    describe('create', () => {
    it('deve criar uma nova pessoa', async () => {
      // Arange
      // CreatePessoaDto
      const createPessoaDto: CreatePessoaDto = {
        email: 'yummi@email.com',
        nome: 'yummi',
        password: '123456',
      };
      const passwordHash = 'HASHDESENHA';

      // Que o hashing service tenha o método hash
      // Saber se o hashing service foi chamado com CreatePessoaDto
      // Saber se o pessoaRepository.create foi chamado com dados pessoa
      // Saber se pessoaRepository.save foi chamado com a pessoa criada
      // O retorno final deve ser a nova pessoa criada -> expect

      jest.spyOn(hashingService, 'hash').mockResolvedValue(passwordHash);

      // Act
      await pessoaService.create(createPessoaDto);

      // Assert
      expect(hashingService.hash).toHaveBeenCalledWith(
        createPessoaDto.password,
      );
      expect(pessoaRepository.create).toHaveBeenCalledWith({
        nome: createPessoaDto.nome,
        passwordHash: 'HASHDESENHA',
        email: createPessoaDto.email,
      });
    });
  });
});
