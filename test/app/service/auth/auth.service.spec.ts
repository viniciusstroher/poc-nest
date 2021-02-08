import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '@application/services/user/user.service';
import { DatabaseModule } from '@infra/database/database.module';
import { User } from '@domain/model/user.model';
import { UserRepositoryTypeOrmProvider } from '@infra/factories/user.repository.factories';
import { AuthService } from '@application/services/auth/auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UserService;
  //TROCAR O REPOSITORIO POR MEMORIA
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DatabaseModule],
      providers: [
        UserService,
        AuthService,
        UserRepositoryTypeOrmProvider,
      ],
      
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should generate and save token', async () => {
    const userId:string = "27047c18-c5f8-4dc6-9310-099593df3997";
    await authService.generateAuthenticationTokenByUserId(userId)
    const user:User = await userService.findUserById(userId)

    expect(authService).toBeDefined();
    expect(user.getToken()).not.toBe(null);
  });

  it('should get token', async () => {
    const userId:string = "27047c18-c5f8-4dc6-9310-099593df3997";
    const token:string = await authService.getToken(userId)
    const user:User = await userService.findUserById(userId)

    expect(authService).toBeDefined();
    expect(user.getToken()).toBe(token);
  });
  
});
