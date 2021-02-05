import { Inject } from "@nestjs/common";
import { Connection } from "mongoose";
import { DATABASE_MONGOOSE } from "@config/consts";
import { Model } from "@domain/common/model";
import { User } from "@domain/model/user.model";
import { IUserRepository } from "@domain/repository/user.repository.interface";
import { UserMapper } from "@infra/database/repository/user.mapper";
export class UserMongooseRepository implements IUserRepository, UserMapper{
    
    constructor(@Inject(DATABASE_MONGOOSE) private connection: Connection){}
    
    toDomain(): User {
        throw new Error("Method not implemented.");
    }

    findUserByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async findUserById(userId: number): Promise<User> {
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