import { Controller, Get, Param } from "@nestjs/common";

@Controller('carros')
export class CarroController{
    @Get()
    findAll(){
        return 'all car'
    }

    @Get(":id")
    findOne(@Param('id') id: string){
        return `this root returnt the root ${id}`
    }
}