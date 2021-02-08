import { User, UserModelConstructorParams } from "src/domain/model/user.model";
import { UserModelOrm } from "../orm/user.model.orm";
export class UserMapper {
    static toPersistense(user: User): UserModelOrm {
        const newUserModelOrm:UserModelOrm = new UserModelOrm()
        newUserModelOrm.id = user.id.getId()
        newUserModelOrm.name = user.name
        newUserModelOrm.email = user.email
        newUserModelOrm.created_at = user.createdAt ? user.createdAt.toISOString() : null
        newUserModelOrm.deleted_at = user.deletedAt ? user.deletedAt.toISOString() : null
        return newUserModelOrm
    }
    
    static toDomain(userModelOrm:UserModelOrm): User {
        const params:UserModelConstructorParams = {
            id: userModelOrm.id,
            name: userModelOrm.name,
            email: userModelOrm.email,
            createdAt: new Date(userModelOrm.created_at),
            deletedAt: new Date(userModelOrm.deleted_at)
        }

        return new User(params)
    }
}