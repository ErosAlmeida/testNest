import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";

@Controller('post')
export class PostController{
    constructor(private readonly postService: PostService){}

    @Post()
    create(@Body() createPostDto: CreatePostDto ){
        return this.postService.create(createPostDto);
    }

    @Get()
    findAll(){
        return this.postService.findAll()
    }

    @Get('id')
    findOne(@Param('id') id:string){
        return this.postService.findOne(+id);
    }

    @Patch('id')
    update(@Param('id') id:string, @Body() createPostDto: CreatePostDto){
        return this.postService.update(+id, createPostDto);
    }

    @Delete('id')
    remove(@Param('id') id:string ){
        return this.postService.remove(+id)
    }

}