import { IRepository } from "@domain/common/repository.interface";
import { User } from "@domain/model/user.model";

export interface IUserRepository extends IRepository {
    findUserByEmail(email:string): Promise<User>;
    findUserById(userId:string): Promise<User>;
    listUsers(): Promise<User[]>;
}