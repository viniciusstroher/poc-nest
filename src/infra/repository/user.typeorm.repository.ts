import { Inject } from "@nestjs/common";
import { Connection, EntityManager, getManager} from "typeorm";
import { User, UserModelConstructorParams } from "@domain/model/user.model";
import { IUserRepository } from "@domain/repository/user.repository.interface";
import { UserModelOrm } from "@infra/orm/user.model.orm";
import { UserMapper } from "@infra/mapper/user.mapper";
import { DATABASE_TYPEORM_CONECTION, DATABASE_TYPEORM_MANAGER } from "@config/consts";

export class UserTypeOrmRepository implements IUserRepository, UserMapper{
    constructor(@Inject(DATABASE_TYPEORM_CONECTION) private connection: Connection, 
    @Inject(DATABASE_TYPEORM_MANAGER) private manager: EntityManager){ }

    toPersistense(user: User): UserModelOrm {
        const newUserModelOrm:UserModelOrm = new UserModelOrm()
        newUserModelOrm.id = user.id.getId()
        newUserModelOrm.name = user.name
        newUserModelOrm.email = user.email
        newUserModelOrm.created_at = user.createdAt ? user.createdAt.toISOString() : null
        newUserModelOrm.deleted_at = user.deletedAt ? user.deletedAt.toISOString() : null
        return newUserModelOrm
    }
    
    toDomain(userModelOrm:UserModelOrm): User {
        const params:UserModelConstructorParams = {
            id: userModelOrm.id,
            name: userModelOrm.name,
            email: userModelOrm.email,
            createdAt: new Date(userModelOrm.created_at),
            deletedAt: new Date(userModelOrm.deleted_at)
        }

        return new User(params)
    }
    
    async findUserByEmail(email: string): Promise<User> {
        return new Promise(async resolve => {
            let userModelOrm:UserModelOrm = await this.manager.findOne(UserModelOrm, {email})
            resolve(this.toDomain(userModelOrm));
        })
    }

    async findUserById(userId: string): Promise<User> {
        return new Promise(async resolve => {
            let userModelOrm:UserModelOrm = await this.manager.findOne(UserModelOrm, userId)
            resolve(this.toDomain(userModelOrm));
        })
    }
    
    async exists(user: User): Promise<boolean> {
        return new Promise(async resolve => {
            const userModelOrm:UserModelOrm = await this.manager.findOne(UserModelOrm, user.id.getId())

            if(userModelOrm){
                resolve(true);
            }
            resolve(false);
        })
    }

    async save(user: User): Promise<void> {
        return new Promise(async resolve => {
            await this.manager.save(this.toPersistense(user))
            resolve()
        });
    }
    
    async listUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
}