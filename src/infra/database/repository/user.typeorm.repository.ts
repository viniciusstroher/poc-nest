import { Inject } from "@nestjs/common";
import { Connection} from "typeorm";
import { User, UserModelConstructorParams } from "@domain/model/user.model";
import { IUserRepository } from "@domain/repository/user.repository.interface";
import { UserModelOrm } from "@infra/database/orm/user.model.orm";
import { UserMapper } from "@infra/database/repository/user.mapper";
import { DATABASE_TYPEORM } from "@config/consts";
export class UserTypeOrmRepository implements IUserRepository, UserMapper{

    constructor(@Inject(DATABASE_TYPEORM) private connection: Connection){
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
    
    findUserByEmail(email: string): Promise<User> {
        return new Promise(resolve => {
            this.connection.transaction(async entityManager => {
                const userModelOrm:UserModelOrm = await entityManager.findOne(UserModelOrm, {email})

                resolve(this.toDomain(userModelOrm));
            }).catch(() => resolve(null));
        })
    }

    async findUserById(userId: number): Promise<User> {
        return new Promise(resolve => {
            this.connection.transaction(async entityManager => {
                const userModelOrm:UserModelOrm = await entityManager.findOne(UserModelOrm, userId, {
                    lock: {mode: 'pessimistic_write'},
                })

                resolve(this.toDomain(userModelOrm));
            }).catch(() => resolve(null));
        })
    }
    
    async exists(user: User): Promise<boolean> {
        return new Promise(resolve => {
            this.connection.transaction(async entityManager => {
                const userModelOrm:UserModelOrm = await entityManager.findOne(UserModelOrm, user.id.getId(), {
                    lock: {mode: 'pessimistic_write'},
                })

                if(userModelOrm){
                    resolve(true);
                }
                resolve(false);
                
            }).catch(() => resolve(false));
        })
    }

    async save(user: User): Promise<void> {
        return new Promise(resolve => {
            this.connection.transaction(async entityManager => {
                const newUserModelOrm:UserModelOrm = new UserModelOrm()

                newUserModelOrm.id = user.id.getId()
                newUserModelOrm.name = user.name
                newUserModelOrm.email = user.email
                newUserModelOrm.created_at = user.createdAt ? user.createdAt.toISOString() : null
                newUserModelOrm.deleted_at = user.deletedAt ? user.deletedAt.toISOString() : null

                await entityManager.save(newUserModelOrm)

                resolve();
            });
        });
    }
    
    async listUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
}