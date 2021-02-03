import { Inject } from "@nestjs/common";
import { Model } from "src/domain/common/model";
import { User } from "src/domain/model/user.model";
import { IUserRepository } from "src/domain/repository/user.repository.interface";
import { Connection, EntityManager } from "typeorm";
import { UserModelOrm } from "../orm/user.model.orm";

export class UserTypeOrmRepository implements IUserRepository{

    constructor(@Inject('DATABASE_SQLITE') private connection: Connection){
    }

    async findUserById(userId: number): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    async exists(user: User): Promise<boolean> {
        return new Promise(resolve => {
            this.connection.transaction(async entityManager => {
                const result:any = await entityManager.findOne(UserModelOrm, user.id.getId(), {
                    lock: {mode: 'pessimistic_write'},
                })

                if(result){
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
                newUserModelOrm.created_at = user.createdAt.toISOString()
                newUserModelOrm.deleted_at = user.deletedAt.toISOString()

                await entityManager.save(newUserModelOrm)

                resolve();
            });
        });
    }
    
    async listUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
}