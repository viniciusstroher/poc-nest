import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeOrmRepository } from 'src/infra/database/repository/user.typeorm.repository';
import { UserService } from 'src/app/services/user/user.service';
import { CreateUserParam } from 'src/app/services/user/user.service.dto';
import { DatabaseModule } from 'src/infra/database/database.module';

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
    
    service = await module.resolve(UserService);

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
