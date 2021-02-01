import { IsDate, IsNotEmpty, IsOptional } from "class-validator"
import { Id } from "./id"

export type ModelConstructorParams = {
    id: string, 
    createdAt?:Date, 
    deletedAt?:Date
}

export abstract class Model{
    @IsNotEmpty()
    id:Id

    @IsDate()
    createdAt:Date
    
    @IsDate()
    @IsOptional()
    deletedAt?:Date

    protected constructor(params: ModelConstructorParams){
        this.id = Id.create(params.id)
        this.createdAt = params.createdAt ?? new Date();
        this.deletedAt = params.deletedAt ?? null;
    }

}