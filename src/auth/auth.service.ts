import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { HashingService } from "src/hashing/hashing.service";
import { Pessoa } from "src/pessoas/entities/pessoa-entity";
import jwtConfig from "./config/jwt.config";
import type { ConfigType } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{
 constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
    private readonly hashingService: HashingService,

   @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    
    const pessoa = await this.pessoaRepository.findOneBy({
      email: loginDto.email,
    });

    if (!pessoa) {
      throw new UnauthorizedException('Pessoa não existe.');
    }

    const passwordIsValid = await this.hashingService.compare(
      loginDto.password,
      pessoa.passwordHash,
    );

    if (!passwordIsValid) {
      throw new UnauthorizedException('Senha inválida!');
    }

    // novo token e entregar para o usuário na
    // resposta.

    return {
      message: 'Usuário logado!',
    };
  }
}