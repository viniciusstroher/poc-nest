import { IRepository } from "../common/repository.interface";
import { User } from "../model/user.model";

export interface IUserRepository extends IRepository {
    findUserById(userId:number): Promise<User>;
    listUsers(): Promise<User[]>;
}