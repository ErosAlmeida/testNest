import { Module } from "@nestjs/common";
import { CarroController } from "./carros.controller";

@Module({
    imports: [CarroController],
    exports: [],
    providers: []
})

export class ModuleCarros{}