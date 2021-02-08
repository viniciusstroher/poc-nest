import { IObjectValue } from "./objectvalue.interface";
import { EmptyIdDomainError } from "../errors";
import { IsDate, IsNotEmpty } from "class-validator";
import { Uuid } from "../../infra/helpers/uuid.helper";

export class Id implements IObjectValue{
    
    @IsNotEmpty()
    id:string

    private constructor(id:string){
        if(!id)
            throw EmptyIdDomainError;
        this.id = id
    }
    
    static create(id:string = Uuid.generate()()){
        return new Id(id)
    }

    getId = () => this.id
}