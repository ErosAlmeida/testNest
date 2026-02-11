import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";

@Controller('recados')
export class RecadosController{
    // CRUD
// Create -> POST -> Criar um recado
// Read -> GET -> Ler todos os recados
// Read -> GET -> Ler apenas um recado
// Update -> PATCH / PUT -> Atualizar um recado
// Delete -> DELETE -> Apagar um recado

// PATCH é utilizado para atualizar dados de um recurso
// PUT é utilizado para atualizar um recurso inteiro
    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(){
        return 'all message'
    }

    
    @Get(":id")
    findOne(@Param('id') id :string){
        return `this root return this id ${id}`
    }

    @Post()
    create(@Body() body : any){
        return body ;
    }

    @Patch(":id")
    update(@Param('id') id: string, @Body() Body : any){
        return{
            id,
            ...Body
        }
    }
    @Delete(":id")
    delete(@Param('id') id:string){
        return `essa rota apaga a mensagem ${id}`
    }
}