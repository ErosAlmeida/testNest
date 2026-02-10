import { Controller, Get, Param } from "@nestjs/common";

@Controller('recados')
export class RecadosController{
    // Encontra todos os recados
    // /recados/
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
}