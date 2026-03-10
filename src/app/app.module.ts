import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecadosController } from 'src/recados/recados.controller';
import { RecadosModule } from 'src/recados/recados.module';
import { RecadosService } from 'src/recados/recados.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username:'postgres',
    database: 'postgres',
    password:'123',
    autoLoadEntities: true, //carrega entidades sem precisar especifica-las
    synchronize: true, // sincroniza com o BD. Não deve ser usado em produção
  }),
    RecadosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
