import { Global, Module } from "@nestjs/common";
import { BcryptService } from "src/hashing/bcrypy.service";
import { HashingService } from "src/hashing/hashing.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Global()
@Module({
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