import { IObjectValue } from "./objectvalue.interface";
import { v4 as uuidv4 } from 'uuid';
import { EmptyIdDomainError } from "./errors";
import { IsDate, IsNotEmpty } from "class-validator";

export class Id implements IObjectValue{
    
    @IsNotEmpty()
    id:string

    private constructor(id:string){
        if(!id)
            throw EmptyIdDomainError;
        this.id = id
    }
    
    static create(id:string = uuidv4()){
        return new Id(id)
    }
}