import { Controller, Get } from "@nestjs/common";

@Controller('home')
export class AppController{
    //constructor(private reaonly appService: AppService){}

    //metodo da solicitação -> ler(Read) -> CRUD
    // /home/hello

    getHello(): string {
        return 'Qualquer coisa'
    }

    @Get('exemplo')
    exemplo(){
        return 'Exemplo de rota';
    }
}