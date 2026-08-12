import { Repository } from "typeorm";
import { Recado } from "./entities/recados.entity";
import { RecadosService } from "./recados.service";
import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

describe('RecadosService', () => {
    let recadosService: RecadosService;
    let recadosRepository: Repository<Recado>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RecadosService,
                {
                    provide: getRepositoryToken(Recado),
                    useValue: {},
                },
            ],
        }).compile();

        recadosService = module.get<RecadosService>(RecadosService);

        recadosRepository = module.get<Repository<Recado>>(
            getRepositoryToken(Recado),
        );
    });

    it('recadosService deve estar definido', () => {
        expect(recadosService).toBeDefined();
    });
});