import { Module } from "@nestjs/common";
import { RecadosController } from "./recados.controller";
import { RecadosService } from "./recados.service";

@Module({
    imports: [RecadosController],
    exports: [],
    providers:[RecadosService]

})

export class RecadosModule{};