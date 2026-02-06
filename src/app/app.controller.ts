import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";


@Controller('home')
export class AppController{
    constructor(private readonly appService: AppService){}

    //metodo da solicitação -> ler(Read) -> CRUD
    // /home/hello

    getHello(): string {
       const retorn = 'Retorno'
       return retorn;
    }

    @Get('exemplo')
    exemplo(){
        return this.appService.solucionaExemplo;
    }

}