import { createConnection } from "typeorm";
import { UserModelOrm } from "@infra/database/orm/user.model.orm";
import mongoose from 'mongoose'
import { DATABASE_TYPEORM, DATABASE_NAME, DATABASE_MONGOOSE } from "@config/consts";

export const DatabaseProviders:any  = [
    {
        provide: DATABASE_TYPEORM,
        useFactory: async () => await createConnection({
          type: 'sqlite',
          database: `${DATABASE_NAME}_db.sqlite3`,
          entities: [ UserModelOrm ],
          synchronize: true,
        }),
    },
    // {
    //   provide: DATABASE_MONGOOSE,
    //   useFactory: async () => mongoose.connect(`mongodb://localhost/${DATABASE_NAME}`),
    // }
]
