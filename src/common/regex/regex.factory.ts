import { Injectable, InternalServerErrorException } from "@nestjs/common";


export type ClassNames = 'OnlyLowercaseLettersRegex' | 'RemoveSpacesRegex';

@Injectable()
export class RegexFactory {
  create(className: ClassNames) {
    // Meu código/lógica
    switch (className) {
      default:
        throw new InternalServerErrorException(
          `No class found for ${className}`,
        );
    }
  }
}