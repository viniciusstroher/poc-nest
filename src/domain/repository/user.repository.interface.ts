import { IRepository } from "../common/repository.interface";
import { User } from "../model/user.model";

export interface IUserRepository extends IRepository {
    findUserByEmail(email:string): Promise<User>;
    findUserById(userId:number): Promise<User>;
    listUsers(): Promise<User[]>;
}