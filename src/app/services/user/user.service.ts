import { Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { User, UserModelConstructorParams } from 'src/domain/model/user.model';
import { IUserRepository } from 'src/domain/repository/user.repository.interface';
import { CreateUserParam } from './user.service.dto';
import { Uuid } from 'src/infra/uuid.helper';
import { UserModelValidateError } from 'src/domain/common/errors';

@Injectable()
export class UserService {
    userRepo:IUserRepository
    constructor(userRepo:IUserRepository){
        this.userRepo = userRepo
    }

    async createUser(params:CreateUserParam):Promise<void>{
        const paramsModel:UserModelConstructorParams = {
            id: Uuid.generate(),
            name: params.name,
            email: params.email 
        }
        
        const user:User = new User(paramsModel)
        const validateUserErrors:any[] = await validate(user)
        
        if(!validateUserErrors.length){
            //se der error adicionar um novo erro
            throw new UserModelValidateError(paramsModel, validateUserErrors)
        }
        
        this.userRepo.save(user);
        
    }
}
