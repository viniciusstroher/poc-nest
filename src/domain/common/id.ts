import { IObjectValue } from "./iobjectvalue";
import { v4 as uuidv4 } from 'uuid';
import { EmptyIdDomainError } from "./errors";

export class Id implements IObjectValue{
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