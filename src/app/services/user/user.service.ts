import { Inject, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { User, UserModelConstructorParams } from '../../../domain/model/user.model';
import { IUserRepository } from '../../../domain/repository/user.repository.interface';
import { CreateUserParam } from './user.service.dto';
import { Uuid } from '../../../infra/uuid.helper';
import { UserModelAlreadyExistsError, UserModelValidateError } from '../../../domain/common/errors'; 
import { UserMongooseRepository } from 'src/infra/database/repository/user.mongoose.repository';

@Injectable()
export class UserService {
    userRepo:IUserRepository

    constructor(@Inject('USER_REPOSITORY') userRepo:IUserRepository){}

    async createUser(params:CreateUserParam):Promise<void>{
        const paramsModel:UserModelConstructorParams = {
            id: Uuid.generate(),
            name: params.name,
            email: params.email 
        }
        
        const user:User = new User(paramsModel)
        const validateUserErrors:any[] = await validate(user)

        if(validateUserErrors.length > 0){
            //se der error adicionar um novo erro
            throw new UserModelValidateError(paramsModel, validateUserErrors)
        }
        
        const userExists:boolean = await this.userRepo.exists(user);
        if(userExists){
            throw new UserModelAlreadyExistsError()
        }

        await this.userRepo.save(user);
    }


    async findUser(userId:string): Promise<User>{
        const userExists:boolean = await this.userRepo.exists(user);
        if(userExists){
            throw new UserModelAlreadyExistsError()
        }

        await this.userRepo.save(user);
    }
}
