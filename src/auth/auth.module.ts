import { Global, Module } from "@nestjs/common";
import { BcryptService } from "src/hashing/bcrypy.service";
import { HashingService } from "src/hashing/hashing.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { Pessoa } from "src/pessoas/entities/pessoa-entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Global()
@Module({

  imports: [TypeOrmModule.forFeature([Pessoa])],
    controllers: [AuthController],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    AuthService,
  ],
  exports: [HashingService],
})
export class AuthModule {}