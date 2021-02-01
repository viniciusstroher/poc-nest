import { IsDate, IsEmail,  IsNotEmpty } from "class-validator";
import { Model, ModelConstructorParams } from "../common/model";

export type UserModelConstructorParams = ModelConstructorParams & {
    name:string,
    email:string 
}

export class User extends Model{
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @IsEmail()
    email:string

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
}