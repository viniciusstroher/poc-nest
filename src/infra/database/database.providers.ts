import { DATABASE_TYPEORM, DATABASE_MONGOOSE } from "@config/consts";
import { DatabaseConnectionMongoose, DatabaseConnectionTypeOrm } from "./database.connection";

export const DatabaseProviders:any  = [
    {
        provide: DATABASE_TYPEORM,
        useFactory: async () => await DatabaseConnectionTypeOrm.getInstance(),
    },
    // {
    //   provide: DATABASE_MONGOOSE,
    //   useFactory: async () => await DatabaseConnectionMongoose.getInstance(),
    // }
]
