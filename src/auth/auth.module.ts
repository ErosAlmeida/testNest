import { Global, Module } from "@nestjs/common";
import { BcryptService } from "src/hashing/bcrypy.service";
import { HashingService } from "src/hashing/hashing.service";

@Global()
@Module({
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
  exports: [HashingService],
})
export class AuthModule {}