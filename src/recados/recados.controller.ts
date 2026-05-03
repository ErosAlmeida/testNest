import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { RecadosService } from "./recados.service";
import { CreateRecadoDto } from "./dto/create-recado.dto";
import { UpdateRecadoDto } from "./dto/update-recado.dto";
import { PaginationDto } from "src/common/dto/pagination.dto";


@Controller('recados')
export class RecadosController{

    constructor(private readonly recadosService: RecadosService){}
// Create -> POST -> Criar um recado
// Read -> GET -> Ler todos os recados
// Read -> GET -> Ler apenas um recado
// Update -> PATCH / PUT -> Atualizar um recado
// Delete -> DELETE -> Apagar um recado

// PATCH é utilizado para atualizar dados de um recurso
// PUT é utilizado para atualizar um recurso inteiro
    @HttpCode(HttpStatus.OK)
    @Get()

   async findAll(@Query() pagination: PaginationDto){
       const{limit = 10, offset = 0} = pagination;
      const recados = await this.recadosService.findAll(paginationDto);
      return recados;
    }

    
    @Get(":id")
    findOne(@Param('id', ParseIntPipe) id: number ){
        return this.recadosService.findOne(id)
    }

    @Post()
    create(@Body() createRecadoDto: CreateRecadoDto){
       return this.recadosService.create(createRecadoDto)
    }

    @Patch(":id")
    update(@Param('id', ParseIntPipe) id: number , @Body() updateRecadoDto:UpdateRecadoDto){
      return this.recadosService.update(id, updateRecadoDto);
    }
    @Delete(":id")
    remove(@Param('id', ParseIntPipe) id: number){
        return this.recadosService.remove(id);
    }
}