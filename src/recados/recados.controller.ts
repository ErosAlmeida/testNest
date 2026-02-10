import { Controller, Get } from "@nestjs/common";

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
    findOne(){
        return 'this root return one message'
    }
}