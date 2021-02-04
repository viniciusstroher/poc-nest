import { Inject } from "@nestjs/common";
import { Connection } from "mongoose";
import { Configuration, DATABASE_SELECTED_PROVIDER } from "src/config/configuration";
import { DATABASE_MONGO } from "src/config/consts";
import { Model } from "src/domain/common/model";
import { User } from "src/domain/model/user.model";
import { IUserRepository } from "src/domain/repository/user.repository.interface";
import { UserMapper } from "./usermongoose.mapper";
export class UserMongooseRepository implements IUserRepository, UserMapper{
    
    constructor(@Inject(Configuration.getDatabaseSelectedProvider()) private connection: Connection){}
    
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