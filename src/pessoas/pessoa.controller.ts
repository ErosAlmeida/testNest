import { Body, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PessoasService } from "./pessoa.service";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";

export class PessoasController{

    constructor(private readonly pessoasService: PessoasService){}

    @Post()
    create(@Body() createPessoaDto: CreatePessoaDto){
        return this.pessoasService.create(createPessoaDto);
    }

    @Get()
    findAll(){
        return this.pessoasService.findAll()
    }

    @Get(':id')
    findOne(@Param() id: number){
        return this.pessoasService.findOne(+id)
    }

   @Patch(':id')
     update(@Param('id') id: string, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoasService.update(+id, updatePessoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return this.pessoasService.delete(+id)
  }

}