import { Provider } from "@nestjs/common";
import { createConnection } from "typeorm";

export const DatabaseProviders:any  = [
    {
        provide: 'DATABASE_SQLITE',
        useFactory: async () => await createConnection({
          type: 'sqlite',
          database: 'db.sqlite3',
          entities: [
              __dirname + '/../**/*.entity{.ts,.js}',
          ],
          synchronize: true,
        }),
    }
    //implementar mongo e in-memory
]
