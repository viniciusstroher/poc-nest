import { Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { User, UserModelConstructorParams } from 'src/domain/model/user.model';
import { IUserRepository } from 'src/domain/repository/user.repository.interface';
import { CreateUserParam } from './user.service.dto';
import { Uuid } from 'src/infra/uuid.helper';

@Injectable()
export class UserService {
    userRepo:IUserRepository
    constructor(userRepo:IUserRepository){
        this.userRepo = userRepo
    }

    async createUser(params:CreateUserParam):Promise<void>{
        const paramsModel:UserModelConstructorParams = {
            id: Uuid.generate(),
            name: "Vinicius",
            email: "vinicius@ferreirawk@gmail.com" 
        }
        
        const user:User = new User(paramsModel)
        const errors:any[] = await validate(user)
        
        if(!errors.length){
        
        }
        
        this.userRepo.save(user);
        
    }
}
