import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { PessoasService } from "./pessoa.service";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";

import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
import { REMOVE_SPACES_REGEX } from "src/common/constants/server-name.constant";
import { LetterLower } from "src/common/regex/letterLower";
import { AuthTokenGuard } from "src/auth/guards/auth-token.guard";
import { REQUEST_TOKEN_PAYLOAD_KEY } from "src/auth/auth.constants";

@UseGuards(AuthTokenGuard)
@Controller("pessoas")
export class PessoasController {
  onlyLowercaseLettersRegex: any;
  constructor(private readonly pessoasService: PessoasService) {
 
 // @Inject(REMOVE_SPACES_REGEX)
  //private readonly onlyLowercaseLettersRegex: LetterLower
  
  }

  @Get()
  findAll(@Req() request: Request) {
    console.log(request[REQUEST_TOKEN_PAYLOAD_KEY].sub);
    return this.pessoasService.findAll();
  }

  @Post()
  create(@Body() createPessoaDto: CreatePessoaDto) {
    return this.pessoasService.create(createPessoaDto);
  }


  @Get(":id")
  findOne(
    @Param("id", ParseIntPipe)
    id: number,
  ) {
    return this.pessoasService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe)
    id: number,
    @Body() updatePessoaDto: UpdatePessoaDto,
  ) {
    return this.pessoasService.update(id, updatePessoaDto);
  }

  @Delete(":id")
  remove(
    @Param("id", ParseIntPipe)
    id: number,
  ) {
    return this.pessoasService.delete(id);
  }
}