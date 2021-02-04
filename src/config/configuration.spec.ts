import { Test, TestingModule } from '@nestjs/testing';
import { Configuration } from './configuration';
import { ConfigurationModule } from './configuration.module';

describe('UserService', () => {

  //TROCAR O REPOSITORIO POR MEMORIA
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[ConfigurationModule],
      providers: [],
      
    }).compile();

    
  });

  it('should load env in configuration class', async () => {
    console.log(process.env.DATABASE_SELECTED_PROVIDER)
    expect(Configuration.getDatabaseSelectedProvider()).toBe('DATABASE_MONGO');
  });

  
});
