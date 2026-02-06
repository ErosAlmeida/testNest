import { Controller, Get } from "@nestjs/common"
import { AppService } from "../app.service";
import { ConceitosAutomaticosService } from "./conceitos-automaticos.service";

@Controller('conceitos-automaticos')
export class ConceitosAutomaticoController{
    constructor(private readonly conceitosAutomaticosService: ConceitosAutomaticosService ){}
    @Get()
    home(): string{
        return this.conceitosAutomaticosService.getHome();
    }
}