import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UCDepartamento } from "src/Domain/Application/UseCase/Departamento/UCDepartamento";
import { Departamento } from "src/Domain/Core/Entities/departamento";

@Controller('departamento')
export class departamentoController{

    constructor(private ucDepartamento: UCDepartamento){
    }

    @Get('/listar')
    findAll(): Promise<Departamento[]>{
        return this.ucDepartamento.findAll();
    }

    @Post('/insert')
    insert(@Body() departamento: Departamento): Promise<Departamento>{
        return this.ucDepartamento.create(departamento);
    }
}