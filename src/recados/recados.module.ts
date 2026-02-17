import { Module } from "@nestjs/common";
import { RecadosController } from "./recados.controller";
import { RecadosService } from "./recados.service";

@Module({
    imports: [RecadosController],
    providers:[RecadosService],
    exports: [],

})

export class RecadosModule{};