import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdateRecadoDto } from "src/recados/dto/update-recado.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Pessoa } from "./entities/pessoa-entity";
import { Repository, UpdateDateColumn } from "typeorm";
import { NotFoundError } from "rxjs";
import { updatePessoaDto } from "./dto/update-pessoa.dto";


@Injectable()
export class PessoasService {
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
  if (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as any).code === '23505'
  ) {
    throw new ConflictException('E-mail já está cadastrado.');
  }

  throw error;
}
  }
    async findAll(){
      const pessoa = await this.pessoaRepository.find({
        order:{
          id: 'desc',
        }
      })

      return pessoa;
    }

    async findOne(id: number){
       const pessoa = this.pessoaRepository.findOneBy({
        id,
       });
       if(!pessoa){
        throw new NotFoundException('Pessoa não encontrada')
       }
    }

   async update(id: number, updateRecadoDto : UpdateRecadoDto){
        const dadosPessoa = {
      nome: updatePessoaDto?.nome,
      passwordHash: updatePessoaDto?.password,
    };

    const pessoa = await this.pessoaRepository.preload({
      id,
      ...dadosPessoa,
    });

    if (!pessoa) {
      throw new NotFoundException('Pessoa não encontrada');
    }

    return this.pessoaRepository.save(pessoa);
    }

    async remove(id: number){
        const pessoa = this.pessoaRepository.remove(id);
        return this.pessoaRepository.remove(pessoa);
    }

}
