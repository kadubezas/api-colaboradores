import { Body, Controller, Get, Post } from "@nestjs/common";
import { UCColaborador } from "src/Domain/Application/UseCase/Colaborador/UCColaborador";
import { Colaborador } from "src/Domain/Core/Entities/colaboradores";

@Controller('colaborador')
export class colaboradorController{

    constructor(private ucColaborador: UCColaborador){}

    @Get('/listar')
    findAll(): Promise<Colaborador[]>{
        return this.ucColaborador.findAll();
    }

    @Post('/insert')
    insert(@Body() colaborador: Colaborador): Promise<Colaborador>{
        return this.ucColaborador.create(colaborador);
    }
}