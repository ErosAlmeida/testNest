import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const TokenPayloadParam = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {

        const context = ctx.switchToHttp();
        const request: Request = context.getRequest();
        return request['tokenPayload'];

    }

)
/*

 create(@Body()createRecadoDto: CreateRecadoDto,
 @TokenPayloadParam() tokenPayload: TokenPayloadDto) {

 return this.recadosService.create(createRecadoDto, tokenPayload.sub);
 }

 update(@Param('id') id:number,
 @Body() updateRecadoDto: updateRecadoDto,
 @TokenPayLoadParam() tokenPayload: TokenPayloadDto){

 return this.recadosService.update(id, updateRecadoDto, tokenPayload.sub);
 }

 remove(@Param('id') id:number,
 @TokenPayloadParam() tokenPayload: TokenPayloadDto){

 return this.recadosService.remove(id, tokenPayload.sub);


 
 }

*/
 
