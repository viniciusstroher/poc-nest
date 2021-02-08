import { UserRepositoryTypeOrmProvider } from '@infra/factories/user.repository.factories';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './app/services/user/user.service';
import { DatabaseModule } from './infra/database/database.module';
import { UserMongooseRepository } from './infra/repository/user.mongoose.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService, 
    //provider para usar user repository com a implementação do MONGOOSE
    UserRepositoryTypeOrmProvider,
    UserService
  ],
})
export class AppModule {}
