import { DATABASE_TYPEORM_CONECTION, DATABASE_MONGOOSE_CONECTION, DATABASE_TYPEORM_MANAGER } from "@config/consts";
import { getManager } from "typeorm";
import { DatabaseConnectionMongoose, DatabaseConnectionTypeOrm } from "./database.connection";

export const DatabaseProviders:any  = [
    {
        provide: DATABASE_TYPEORM_CONECTION,
        useFactory: async () => await DatabaseConnectionTypeOrm.getInstance(),
    },
    {
        provide: DATABASE_TYPEORM_MANAGER,
        useFactory: async () => getManager(),
    },
    // {
    //   provide: DATABASE_MONGOOSE_CONECTION,
    //   useFactory: async () => await DatabaseConnectionMongoose.getInstance(),
    // }
]
