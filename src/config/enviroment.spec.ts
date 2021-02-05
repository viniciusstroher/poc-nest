import { UserService } from '@application/services/user/user.service';
import { CreateUserParam } from '@application/services/user/user.service.dto';
import { Enviroment } from './enviroment';

describe('Config', () => {

  it('should create user in user service', async () => {
    expect(Enviroment.get('DATABASE_SELECTED')).toBe('DATABASE_TYPEORM');
  });
  
});
