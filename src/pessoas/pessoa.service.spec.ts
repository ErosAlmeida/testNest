import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PessoasService } from './pessoa.service';
import { Pessoa } from './entities/pessoa-entity';
import { HashingService } from 'src/hashing/hashing.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { IsEmail } from 'class-validator';

describe('PessoasService', () => {
  let pessoaService: PessoasService;
  let pessoaRepository: Repository<Pessoa>;
  let hashingService: HashingService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PessoasService,
        {
          provide: getRepositoryToken(Pessoa),
            useValue: {
            save: jest.fn(),
            create: jest.fn(),
          },
        },
        {
          provide: HashingService,
          useValue: {
            hash: jest.fn(),
          },
        },
      ],
    }).compile();
    pessoaService = module.get<PessoasService>(PessoasService);
    pessoaRepository = module.get<Repository<Pessoa>>(
      getRepositoryToken(Pessoa),
    );
    hashingService = module.get<HashingService>(HashingService);
  });
  it('pessoaService deve estar definido', () => {
    expect(pessoaService).toBeDefined();

      describe('create', () => {
    it('deve criar uma nova pessoa', async () => {
      // CreatePessoaDto
      const createPessoaDto: CreatePessoaDto = {
        email: 'luiz@email.com',
        nome: 'Luiz',
        password: '123456',
      };
      const passwordHash = 'HASHDESENHA';
      const novaPessoa = {
        id: 1,
        nome: createPessoaDto.nome,
        email: createPessoaDto.email,
        passwordHash,
      }
      // Que o hashing service tenha o método hash
      // Saber se o hashing service foi chamado com CreatePessoaDto
      // Saber se o pessoaRepository.create foi chamado com dados pessoa
      // Saber se pessoaRepository.save foi chamado com a pessoa criada
      // O retorno final deve ser a nova pessoa criada -> expect

      //como o valor retornado por hashingService é necessario
      //vamos simular esse valor
      jest.spyOn(hashingService, 'hash').mockResolvedValue(passwordHash);

      //act
      const result = await pessoaService.create(createPessoaDto)

      //Assert
     // O método hashingService.hash foi chamado com createPessoaDto.password?
      expect(hashingService.hash).toHaveBeenCalledWith(createPessoaDto.password)
      
      // o metodo pessoaRepository.create foi chamado com os dados da nova pessoa
      //com o has de senha gerado por hashingService.hash
      expect(pessoaRepository.create).toHaveBeenLastCalledWith({
      nome: createPessoaDto.nome,
      email: createPessoaDto.email,
      passwordHash,
      })

       // O método pessoaRepository.save foi chamado com os dados da nova
      // pessoa gerada por pessoaRepository.create?
      expect(pessoaRepository.save).toHaveBeenCalledWith(novaPessoa)


      // O resultado do método pessoaService.create retornou a nova
      // pessoa criada?
      expect(result).toEqual(novaPessoa)
    });
  });
  });
});