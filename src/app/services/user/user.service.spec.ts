import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeOrmRepository } from '@infra/database/repository/user.typeorm.repository';
import { UserService } from '@application/services/user/user.service';
import { CreateUserParam } from '@application/services/user/user.service.dto';
import { DatabaseModule } from '@infra/database/database.module';

describe('UserService', () => {
  let service: UserService;
  let repository

  //TROCAR O REPOSITORIO POR MEMORIA
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DatabaseModule],
      providers: [
        UserService,
        {
          provide: 'USER_REPOSITORY',
          useClass: UserTypeOrmRepository,
        },
      ],
      
    }).compile();

    service = module.get<UserService>(UserService);
    console.log(service)
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
