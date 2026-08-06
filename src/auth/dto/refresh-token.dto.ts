import { IsNotEmpty, isString } from "class-validator";

export class RefreshTokenDto {
  @IsNotEmpty()
    refreshToken!: string;

    @IsNotEmpty()
    pessoa!: string 

}