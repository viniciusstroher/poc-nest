import { Inject, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { User, UserModelConstructorParams } from '@domain/model/user.model';
import { IUserRepository } from '@domain/repository/user.repository.interface';
import { CreateUserParam } from '@application/services/user/user.service.dto';
import { Uuid } from '@infra/uuid.helper';
import { UserModelAlreadyExistsError, UserModelValidateError } from '@domain/errors'; 
import { USER_REPOSITORY } from '@config/consts';
import { AuthServiceUserNotFoundError } from '@application/errors';

@Injectable()
export class AuthService {

    constructor(@Inject(USER_REPOSITORY) private userRepo:IUserRepository){ }

    async getToken(userId:string): Promise<string>{
        const user:User = await this.userRepo.findUserById(userId)
        if(!user){
            throw AuthServiceUserNotFoundError
        }
        return user.getToken()
    }

    async generateAuthenticationTokenByUserId(userId:string): Promise<string>{
        const user:User = await this.userRepo.findUserById(userId)
        if(!user){
            throw AuthServiceUserNotFoundError
        }
        
        user.setToken(Uuid.generate())

        await this.userRepo.save(user)

        return user.getToken()
    }

}
