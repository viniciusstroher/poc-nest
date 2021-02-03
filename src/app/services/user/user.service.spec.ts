import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeOrmRepository } from '../../../infra/database/repository/user.typeorm.repository';
import { UserMongooseRepository } from '../../../infra/database/repository/user.mongoose.repository';
import { UserService } from './user.service';
import { CreateUserParam } from './user.service.dto';
import { getRepository } from 'typeorm';
import { UserModelOrm } from '../../../infra/database/orm/user.model.orm';
import { DatabaseModule } from '../../../infra/database/database.module';

describe('UserService', () => {
  let service: UserService;
  let repository

  //TROCAR O REPOSITORIO POR MEMORIA
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DatabaseModule],
      providers: [
        DatabaseModule,

        {
          provide: 'USER_REPOSITORY',
          useClass: UserTypeOrmRepository,
        },
        
        UserService
      ],
      
    }).compile();

    
    // repository = getRepository(UserModelOrm, "DATABASE_SQLITE");
    // console.log(repository)
    // service = new UserService(repository);
    
    service = module.get<UserService>(UserService);
  });

  it('shoul create user in user service', async () => {
    const params:CreateUserParam = {
      name: "Vinicius",
      email: "viniciusferreirawk@gmail.com"
    }
    
    await service.createUser(params)

    expect(service).toBeDefined();
  });
});
