import { Model } from "./model";

export interface IRepository {
    exists(entity: Model): Promise<boolean>;
    save(entity: Model): Promise<void>;
}