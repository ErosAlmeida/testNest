import { Module } from "@nestjs/common";
import { ConceitosAutomaticoController } from "./conceitos-automaticos.controller";

@Module({
    controllers: [ConceitosAutomaticoController]
})

export class ConceitosAutomaticosModule{}
