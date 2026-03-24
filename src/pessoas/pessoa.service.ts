import { ConflictException, Injectable } from "@nestjs/common";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdateRecadoDto } from "src/recados/dto/update-recado.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Pessoa } from "./entities/pessoa-entity";
import { Repository } from "typeorm";

@Injectable()
export class PessoasService{
   constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  async create(createPessoaDto: CreatePessoaDto) {
    try {
      const dadosPessoa = {
        nome: createPessoaDto.nome,
        passwordHash: createPessoaDto.password,
        email: createPessoaDto.email,
      };

      const novaPessoa = this.pessoaRepository.create(dadosPessoa);
      await this.pessoaRepository.save(novaPessoa);
      return novaPessoa;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('E-mail já está cadastrado.');
      }

      throw error;
    }
    }

    findAll(){
        return 'this action return all people'
    }

    findOne(id: number){
        return `this action return the number ${id}`
    }

    update(id: number, updateRecadoDto : UpdateRecadoDto){
        return `this action updated the id ${id}`
    }

    delete(id: number){
        return `this action dele the id ${id}`
    }

}