import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";

@Controller('carro')
export class CarroController{

    @Get()
     findAll(@Query() pagination: any) {
        const { limit = 10, offset = 0 } = pagination;
        return `Retorna todos os recados. Limit=${limit}, Offset=${offset}.`;
    }


    @Get(":id")
    findOne(@Param('id') id : string){
        return `o id do recado é ${id}`
    }

    @Post()
    create(@Body('body') Body : any){
        return Body;
    }

    @Patch(":id")
    update(@Param('id') id: string, @Body() Body : any){
        return {
            id,
            ...Body
        }
       
    }

    @Delete(":id")
    delete(@Param('id') id :string){
        return `tirando o id ${id}`
    }
}