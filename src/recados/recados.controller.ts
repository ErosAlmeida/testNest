import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";

@Controller('recados')
export class RecadosController{
    // Encontra todos os recados
    // /recados/
    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(){
        return 'all message'
    }

    // Encontra um recado
    // /recados/:id/
    @Get(":id")
    findOne(@Param('id') id :string){
        return `this root return this id ${id}`
    }

    @Post()
    create(@Body() body : any){
        return body ;
    }
}