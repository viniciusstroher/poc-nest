import { IModel } from "./imodel";

export interface IRepository {
    exists(entity: IModel): Promise<boolean>;
    save(entity: IModel): Promise<boolean>;
}