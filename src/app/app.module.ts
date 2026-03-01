import { Module } from '@nestjs/common';
import { RecadosController } from 'src/recados/recados.controller';
import { RecadosService } from 'src/recados/recados.service';


@Module({
  imports: [],
  controllers: [RecadosController],
  providers: [RecadosService],
})
export class AppModule {}
