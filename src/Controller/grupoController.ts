import { Body, Controller, Get, Post } from "@nestjs/common";
import { UCGRupo } from "src/Domain/Application/UseCase/Grupo/UCGrupo";
import { Grupo } from "src/Domain/Core/Entities/grupo";

@Controller('grupo')
export class grupoController{

    constructor(private ucGrupo: UCGRupo){

    }

    @Get('/listar')
    findAll(): Promise<Grupo[]>{
        return this.ucGrupo.findAll();
    }

    @Post('/insert')
    insert(@Body() grupo: Grupo): Promise<Grupo>{
        return this.ucGrupo.create(grupo);
    }
}