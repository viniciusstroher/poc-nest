import { User } from "src/domain/model/user.model";
import { UserModelOrm } from "../orm/user.model.orm";

export interface UserMapper{
    toDomain(userModelOrm:UserModelOrm): User
}