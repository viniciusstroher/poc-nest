import { Inject, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { User, UserModelConstructorParams } from '@domain/model/user.model';
import { IUserRepository } from '@domain/repository/user.repository.interface';
import { CreateUserParam } from '@application/services/user/user.service.dto';
import { Uuid } from '@infra/uuid.helper';
import { UserModelAlreadyExistsError, UserModelValidateError } from '@domain/common/errors'; 
import { USER_REPOSITORY } from '@config/consts';

@Injectable()
export class AuthService {

    constructor(@Inject(USER_REPOSITORY) private userRepo:IUserRepository){ }

    async getToken(userId:string): Promise<string>{
        return "";
    }

    async validateToken(token:string, userId:string):Promise<boolean>{
        return true;
    }

    async createToken(userId:string): Promise<string>{
        return "";
    }

    async saveToken(userId:string, token:string):Promise<void>{

    }

    async invalidateToken(userId:string):Promise<void>{

    }
}
