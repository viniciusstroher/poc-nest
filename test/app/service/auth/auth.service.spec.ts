import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeOrmRepository } from '@infra/repository/user.typeorm.repository';
import { UserService } from '@application/services/user/user.service';
import { CreateUserParam } from '@application/services/user/user.service.dto';
import { DatabaseModule } from '@infra/database/database.module';
import { User } from '@domain/model/user.model';
import { UserRepositoryTypeOrmProvider } from '@infra/repository/user.repository.factories';

describe('AuthService', () => {
  let service: UserService;
  let repository

  //TROCAR O REPOSITORIO POR MEMORIA
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DatabaseModule],
      providers: [
        UserService,
        UserRepositoryTypeOrmProvider,
      ],
      
    }).compile();

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
