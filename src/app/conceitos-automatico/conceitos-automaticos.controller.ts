import { Controller, Get } from "@nestjs/common"

@Controller('conceitos-automaticos')
export class ConceitosAutomaticoController{
    @Get()
    home(): string{
        return 'conceitos-automaticos';
    }
}