import { Provider } from "@nestjs/common";
import { createConnection } from "typeorm";
import { UserModelOrm } from "./orm/user.model.orm";

export const DatabaseProviders:any  = [
    {
        provide: 'DATABASE_SQLITE',
        useFactory: async () => await createConnection({
          type: 'sqlite',
          database: 'db.sqlite3',
          entities: [ UserModelOrm ],
          synchronize: true,
        }),
    }
    //implementar mongo e in-memory
]
