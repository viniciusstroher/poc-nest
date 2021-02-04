import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeOrmRepository } from '../../../infra/database/repository/user.typeorm.repository';
import { UserService } from './user.service';
import { CreateUserParam } from './user.service.dto';
import { DatabaseModule } from '../../../infra/database/database.module';
import { User } from 'src/domain/model/user.model';

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

    service = module.get<UserService>(UserService);
    service = module.get<UserService>(UserService);
  });

  it('should create user in user service', async () => {
    const params:CreateUserParam = {
      name: "Vinicius",
      email: "viniciusferreirawk@gmail.com"
    }
    
    await service.createUser(params)
    
    expect(service).toBeDefined();
  });

  
});
