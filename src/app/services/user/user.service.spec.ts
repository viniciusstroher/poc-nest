import { Test, TestingModule } from '@nestjs/testing';
import { UserMongooseRepository } from '../../../infra/database/repository/user.mongoose.repository';
import { UserService } from './user.service';
import { CreateUserParam } from './user.service.dto';

describe('UserService', () => {
  let service: UserService;

  //TROCAR O REPOSITORIO POR MEMORIA
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'USER_REPOSITORY',
          useClass: UserMongooseRepository,
        },

        UserService
      ],
      
    }).compile();

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
