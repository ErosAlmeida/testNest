import { Controller } from "@nestjs/common";

@Controller('recados')
export class RecadosController{
    // Encontra todos os recados
    // /recados/
    findAll(){
        return 'todos os recados'
    }

    // Encontra um recado
    // /recados/:id/
    findOne(){
        return 'um recado'
    }
}