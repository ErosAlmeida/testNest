import { PartialType } from "@nestjs/mapped-types";
import { CreatePessoaDto } from './create-pessoa.dto';

export class updatePessoaDto extends PartialType(CreatePessoaDto) {
  static nome: any;
  static password: any;
}