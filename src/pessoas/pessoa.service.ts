import { Injectable } from "@nestjs/common";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdateRecadoDto } from "src/recados/dto/update-recado.dto";

@Injectable()
export class PessoasService{
    create(createPessoaDto: CreatePessoaDto){
        return 'this action return a new people';
    }

    findAll(){
        return 'this action return all people'
    }

    findOne(id: number){
        return `this action return the number ${id}`
    }

    update(id: number, updateRecadoDto : UpdateRecadoDto){
        return `this action updated the id ${id}`
    }

    delete(id: number){
        return `this action dele the id ${id}`
    }

}