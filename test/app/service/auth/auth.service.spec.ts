import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeOrmRepository } from '@infra/repository/user.typeorm.repository';
import { UserService } from '@application/services/user/user.service';
import { CreateUserParam } from '@application/services/user/user.service.dto';
import { DatabaseModule } from '@infra/database/database.module';
import { User } from '@domain/model/user.model';

describe('AuthService', () => {
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

  });

  it('should create user in user service', async () => {
    const params:CreateUserParam = {
      name: "Vinicius",
      email: "viniciusferreirawk@gmail.com"
    }
    
    await service.createUser(params)
    
    expect(service).toBeDefined();
  });

  it('should find by email user in user service', async () => {
    const email:string = "viniciusferreirawk@gmail.com"
    const user:User = await service.findUserByEmail(email)
    
    expect(user).toBeInstanceOf(User);
  });

  it('should find by id user in user service', async () => {
    const email:string = "viniciusferreirawk@gmail.com"
    const userByEmail:User = await service.findUserByEmail(email)
    const userById:User = await service.findUserById(userByEmail.id.getId())

    expect(userById).toBeInstanceOf(User);
    expect(userByEmail.id.getId()).toBe(userById.id.getId());
  });

  
});
