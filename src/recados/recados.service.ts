import { Injectable } from "@nestjs/common";

@Injectable()
export class RecadosService{
   private lastId = 1;

   hello(){
    return 'teste'
   }
}