import { IRepository } from "src/domain/common/repository.interface";
import { User } from "src/domain/model/user.model";

export interface IUserRepository extends IRepository {
    findUserByEmail(email:string): Promise<User>;
    findUserById(userId:number): Promise<User>;
    listUsers(): Promise<User[]>;
}