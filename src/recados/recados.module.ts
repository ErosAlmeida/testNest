import { Module } from "@nestjs/common";
import { RecadosController } from "./recados.controller";

@Module({
    imports: [RecadosController],
    exports: [],
    providers:[]

})

export class RecadosModule{};