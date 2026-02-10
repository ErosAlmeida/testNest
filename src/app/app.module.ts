import { Controller, Module } from "@nestjs/common";
import { RecadosController } from "src/recados/recados.controller";


@Module({
    imports: [RecadosController],
    controllers: [],
    providers:[]
})

export class AppModule{};