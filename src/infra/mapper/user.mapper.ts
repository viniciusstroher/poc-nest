import { User, UserModelConstructorParams } from "@domain/model/user.model";
import { UserModelOrm } from "@infra/orm/user.model.orm";
export class UserMapper {
    static toPersistense(user: User): UserModelOrm {
        const newUserModelOrm:UserModelOrm = new UserModelOrm()
        newUserModelOrm.id = user.id.getId()
        newUserModelOrm.name = user.name
        newUserModelOrm.email = user.email
        newUserModelOrm.token = user.token ? user.token : null
        newUserModelOrm.created_at = user.createdAt ? user.createdAt.toISOString() : null
        newUserModelOrm.deleted_at = user.deletedAt ? user.deletedAt.toISOString() : null
        return newUserModelOrm
    }
    
    static toDomain(userModelOrm:UserModelOrm): User {
        const params:UserModelConstructorParams = {
            id: userModelOrm.id,
            name: userModelOrm.name,
            email: userModelOrm.email,
            token: userModelOrm.token,
            createdAt: userModelOrm.created_at ? new Date(userModelOrm.created_at) : null,
            deletedAt: userModelOrm.deleted_at ? new Date(userModelOrm.deleted_at) : null
        }

        return new User(params)
    }
}