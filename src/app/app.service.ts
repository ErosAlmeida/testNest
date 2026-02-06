import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{
    getHello(): string{
        return 'hello word'
    }
    solucionaExemplo(){
        return 'Exemplo usa o service';
    }

    testandoMonstro(){
        return 'yummi'
    }

}