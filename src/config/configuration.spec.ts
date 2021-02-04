
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationModule } from './configuration.module';

describe('UserService', () => {
  let provider:ConfigService
  //TROCAR O REPOSITORIO POR MEMORIA
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[ConfigurationModule],
      providers: [ConfigService],
    }).compile();

    provider = module.get<ConfigService>(ConfigService)
  });

  it('should load env in configuration class', async () => {
    console.log(provider.get<string>('DATABASE_SELECTED_PROVIDER'))
    // expect(Configuration.getDatabaseSelectedProvider()).toBe('DATABASE_MONGO');
  });

  
});
