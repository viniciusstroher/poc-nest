import { Module } from '@nestjs/common';
import { UserMongooseRepository } from '@infra/repository/user.mongoose.repository';
import { UserTypeOrmRepository } from './user.typeorm.repository';

export const UserRepositoryTypeOrmProvider = {
  provide: 'USER_REPOSITORY',
  useClass: UserTypeOrmRepository,
}

export const UserRepositoryMongooseProvider = {
  provide: 'USER_REPOSITORY',
  useClass: UserMongooseRepository,
}