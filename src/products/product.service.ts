import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { create } from "domain";

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {
        create(dto: CreateProductDto) {
          return this.prisma.product.create({
            data: {
              name: dto.name,
              price: dto.price,
              description: dto.description,
            }
          })  
        }
    }

    findAll() {
        return this.prisma.product.findMany();
    }

    findOne(id:number){
        return this.prisma.product.findUnique({
            where:{id}
        })
    }

    update(id:number, dto: CreateProductDto){

        return this.prisma.product.update({
            where:{id},
            data:{
                name: dto.name,
                price: dto.price,
                description: dto.description,
            }
        })
    }

    remove(id:number){
        return this.prisma.product.delete({
            where:{id}
        })
    }

}