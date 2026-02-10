import { Module } from '@nestjs/common';
import { RecadosController } from 'src/recados/recados.controller';


@Module({
  imports: [],
  controllers: [RecadosController],
  providers: [],
})
export class AppModule {}
