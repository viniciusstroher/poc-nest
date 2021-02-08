import { IsDate, IsEmail,  IsNotEmpty } from "class-validator";
import { Model, ModelConstructorParams } from "@domain/common/model";

export type UserModelConstructorParams = ModelConstructorParams & {
    name:string,
    email:string,
    token?:string
}

export class User extends Model{
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @IsEmail()
    email:string

    token:string

    constructor(params: UserModelConstructorParams){
        const parentParams: ModelConstructorParams = {
            id: params.id, 
            createdAt: params.createdAt, 
            deletedAt: params.deletedAt,
        }
    
        super(parentParams)
        this.name = params.name
        this.email = params.email
    }

    setToken(token:string){
        this.token = token
    }

    getToken(): string{
        return this.token
    }
}