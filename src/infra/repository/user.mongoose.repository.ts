import { Inject } from "@nestjs/common";
import { Connection } from "mongoose";
import { DATABASE_MONGOOSE_CONECTION } from "@config/consts";
import { Model } from "@domain/common/model";
import { User } from "@domain/model/user.model";
import { IUserRepository } from "@application/repository/user.repository.interface";
import { UserMapper } from "@infra/mapper/user.mapper";
import { UserModelOrm } from "../orm/user.model.orm";
export class UserMongooseRepository implements IUserRepository, UserMapper{
    
    constructor(@Inject(DATABASE_MONGOOSE_CONECTION) private connection: Connection){}
    toPersistense(user: User): UserModelOrm {
        throw new Error("Method not implemented.");
    }
    
    toDomain(): User {
        throw new Error("Method not implemented.");
    }

    findUserByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async findUserById(userId: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    async exists(entity: Model): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async save(entity: Model): Promise<void> {
    }
    
    async listUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
}