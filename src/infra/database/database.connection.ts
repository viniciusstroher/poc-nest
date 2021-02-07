import { DATABASE_NAME } from "@config/consts"
import { createConnection } from "typeorm"
import { UserModelOrm } from "@infra/database/orm/user.model.orm"
import mongoose from 'mongoose'

export class DatabaseConnectionTypeOrm {
    static connection
    static async getInstance(){
      if(!DatabaseConnectionTypeOrm.connection){
        DatabaseConnectionTypeOrm.connection = await createConnection({
          type: 'sqlite',
          database: `${DATABASE_NAME}_db.sqlite3`,
          // database: ':memory:',
          entities: [ UserModelOrm ],
          synchronize: true,
        })
      }
      return DatabaseConnectionTypeOrm.connection
    }
  }

  export class DatabaseConnectionMongoose {
    static connection
    static getInstance(){
      if(!DatabaseConnectionMongoose.connection){
        DatabaseConnectionMongoose.connection = mongoose.connect(`mongodb://localhost/${DATABASE_NAME}`)
      }
      return DatabaseConnectionMongoose.connection
    }
  }
