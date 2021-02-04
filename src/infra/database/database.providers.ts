import { Provider } from "@nestjs/common";
import { createConnection } from "typeorm";
import { UserModelOrm } from "./orm/user.model.orm";
import mongoose from 'mongoose'
import { DATABASE_MONGO, DATABASE_NAME, DATABASE_SQLITE } from "src/config/consts";

export const DatabaseProviders:any  = [
    {
        provide: DATABASE_SQLITE,
        useFactory: async () => await createConnection({
          type: 'sqlite',
          database: `${DATABASE_NAME}db.sqlite3`,
          entities: [ UserModelOrm ],
          synchronize: true,
        }),
    },
    {
      provide: DATABASE_MONGO,
      useFactory: async () => mongoose.connect(`mongodb://localhost/${DATABASE_NAME}`),
    }
]
