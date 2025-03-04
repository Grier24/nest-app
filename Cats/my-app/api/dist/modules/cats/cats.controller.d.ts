import { CatsService } from "./cats.service";
import { CatResponseDto } from "./dto/cat.response.dto";
import { CatCreateDto } from "./dto/cat.create.dto";
import { CatUpdateDto } from "./dto/cat.update.dto";
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    getAll(): Promise<CatResponseDto[]>;
    getOne(id: number): Promise<CatResponseDto>;
    create(payload: CatCreateDto): Promise<CatResponseDto>;
    delete(id: number): Promise<void>;
    update(id: number, payload: CatUpdateDto): Promise<CatResponseDto>;
}
