import { Module } from '@nestjs/common';
import { UserMongooseRepository } from '@infra/repository/user.mongoose.repository';
import { UserTypeOrmRepository } from '@infra/repository/user.typeorm.repository';

//criar factory de array para importar no app.module quando tiver todos pra mongo e typeorm

export const UserRepositoryTypeOrmProvider = {
  provide: 'USER_REPOSITORY',
  useClass: UserTypeOrmRepository,
}

export const UserRepositoryMongooseProvider = {
  provide: 'USER_REPOSITORY',
  useClass: UserMongooseRepository,
}