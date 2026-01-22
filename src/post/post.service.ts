import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostService{
    create(createDto: CreatePostDto){
        return 'this action add new post'
    }

    findAll(){
        return 'this action return all post'
    }
    
    findOne(id: number){
        return `this action search one post ${id}`
    }

    update(id: number, updatePostDto: UpdatePostDto){
        return `this action do the update of ${id}`
    }

    remove(id:number){
        return `this action remove the ${id}`
    }

}