import { Module } from '@nestjs/common';
import { DatabaseProviders } from './database.providers';
// import { sequelizeProvider } from './sequelize.provider';

@Module({
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders]
})
export class DatabaseModule {}