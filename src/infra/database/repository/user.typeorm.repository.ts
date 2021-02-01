import { Model } from "src/domain/common/model";
import { User } from "src/domain/model/user.model";
import { IUserRepository } from "src/domain/repository/user.repository.interface";

export class UserTypeOrmRepository implements IUserRepository{
    
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