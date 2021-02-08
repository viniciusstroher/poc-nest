import { Inject } from "@nestjs/common";
import { Connection, EntityManager, getManager} from "typeorm";
import { User, UserModelConstructorParams } from "@domain/model/user.model";
import { IUserRepository } from "@application/repository/user.repository.interface";
import { UserModelOrm } from "@infra/orm/user.model.orm";
import { UserMapper } from "@infra/mapper/user.mapper";
import { DATABASE_TYPEORM_CONECTION, DATABASE_TYPEORM_MANAGER } from "@config/consts";

export class UserTypeOrmRepository implements IUserRepository{
    constructor(@Inject(DATABASE_TYPEORM_CONECTION) private connection: Connection, 
    @Inject(DATABASE_TYPEORM_MANAGER) private manager: EntityManager){ }

    async findUserByEmail(email: string): Promise<User> {
        return new Promise(async resolve => {
            let userModelOrm:UserModelOrm = await this.manager.findOne(UserModelOrm, {email})
            resolve(UserMapper.toDomain(userModelOrm));
        })
    }

    async findUserById(userId: string): Promise<User> {
        return new Promise(async resolve => {
            let userModelOrm:UserModelOrm = await this.manager.findOne(UserModelOrm, userId)
            resolve(UserMapper.toDomain(userModelOrm));
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
            const userExists:boolean = await this.exists(user)
            if(!userExists){
                await this.manager.save(UserMapper.toPersistense(user))
            }else{
                await this.manager.update(UserModelOrm, {id: user.id.getId()}, UserMapper.toPersistense(user))
            }
            
            resolve()
        });
    }
    
    async listUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
}