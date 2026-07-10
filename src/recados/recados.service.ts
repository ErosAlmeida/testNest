import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Recado } from "./entities/recados.entity";
import { CreateRecadoDto } from "./dto/create-recado.dto";
import { UpdateRecadoDto } from "./dto/update-recado.dto";
import { PessoasService } from "src/pessoas/pessoa.service";
import { PaginationDto } from "src/common/dto/pagination.dto";

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoRepository: Repository<Recado>,

    private readonly pessoasService: PessoasService,
  ) {}

  private throwNotFoundError(): never {
    throw new NotFoundException("Recado não encontrado.");
  }

  async findAll(paginationDto?: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto ?? {};

    return this.recadoRepository.find({
      take: limit,
      skip: offset,
      relations: ["de", "para"],
      order: {
        id: "DESC",
      },
      select: {
        id: true,
        texto: true,
        lido: true,
        data: true,
        de: {
          id: true,
          nome: true,
        },
        para: {
          id: true,
          nome: true,
        },
      },
    });
  }

  async findOne(id: number) {
    const recado = await this.recadoRepository.findOne({
      where: {
        id,
      },
      relations: ["de", "para"],
      select: {
        id: true,
        texto: true,
        lido: true,
        data: true,
        de: {
          id: true,
          nome: true,
        },
        para: {
          id: true,
          nome: true,
        },
      },
    });

    if (!recado) {
      this.throwNotFoundError();
    }

    return recado;
  }

  async create(createRecadoDto: CreateRecadoDto) {
    const { deId, paraId } = createRecadoDto;

    const de = await this.pessoasService.findOne(deId);
    const para = await this.pessoasService.findOne(paraId);

    const recado = this.recadoRepository.create({
      texto: createRecadoDto.texto,
      lido: false,
      data: new Date(),
      de,
      para,
    });

    await this.recadoRepository.save(recado);

    return recado;
  }

  async update(id: number, updateRecadoDto: UpdateRecadoDto) {
    const recado = await this.findOne(id);

    recado.texto = updateRecadoDto.texto ?? recado.texto;
    recado.lido = updateRecadoDto.lido ?? recado.lido;

    await this.recadoRepository.save(recado);

    return recado;
  }

  async remove(id: number) {
    const recado = await this.findOne(id);

    await this.recadoRepository.remove(recado);

    return {
      message: "Recado removido com sucesso.",
    };
  }
}