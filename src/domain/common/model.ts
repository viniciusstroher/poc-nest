import { Id } from "./id"
import { IModel } from "./imodel"

export abstract class Model implements IModel {
    id:Id

    private constructor(id: Id = Model.generateId()){
        this.id = id
    }

    static generateId(): Id{
        return Id.create()
    }
}