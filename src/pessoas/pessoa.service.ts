import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Pessoa } from "./entities/pessoa-entity";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
import { HashingService } from "src/hashing/hashing.service";

@Injectable()
export class PessoasService {
  delete(id: number) {
    throw new Error("Method not implemented.");
  }
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
    private readonly hashingService: HashingService
  ) {}

  async create(createPessoaDto: CreatePessoaDto) {
    try {

      const passwordHash = await this.hashingService.hash(createPessoaDto.password);

      const dadosPessoa = {
        nome: createPessoaDto.nome,
        passwordHash,
        email: createPessoaDto.email,
      };

      const novaPessoa = this.pessoaRepository.create(dadosPessoa);

      await this.pessoaRepository.save(novaPessoa);

      return novaPessoa;
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error as any).code === "23505"
      ) {
        throw new ConflictException("E-mail já está cadastrado.");
      }

      throw error;
    }
  }

  async findAll() {
    return await this.pessoaRepository.find({
      order: {
        id: "DESC",
      },
    });
  }

  async findOne(id: number) {
    const pessoa = await this.pessoaRepository.findOneBy({
      id,
    });

    if (!pessoa) {
      throw new NotFoundException("Pessoa não encontrada.");
    }

    return pessoa;
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    const pessoa = await this.findOne(id);
  const dadosPessoa = {
      nome: updatePessoaDto?.nome,
     
    };
    pessoa.nome = updatePessoaDto.nome ?? pessoa.nome;

    if (updatePessoaDto?.password) {

      const passwordHash = await this.hashingService.hash(
        updatePessoaDto.password
      );

      dadosPessoa['passwordHash'] = passwordHash;
    }

    return await this.pessoaRepository.save(pessoa);
  }

  async remove(id: number) {
    const pessoa = await this.findOne(id);

    await this.pessoaRepository.remove(pessoa);

    return {
      message: "Pessoa removida com sucesso.",
    };
  }
}