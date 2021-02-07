import { User, UserModelConstructorParams } from '../../../src/domain/model/user.model';
import { validate } from 'class-validator';
import { Uuid } from '@infra/uuid.helper';


describe('User Model (domain)', () => {
  it('should pass if params satify - class-validator', () => {

    const params:UserModelConstructorParams = {
        id: Uuid.generate(),
        name: "Vinicius",
        email: "vinicius@ferreirawk@gmail.com" 
    }
    const user:User = new User(params)
    expect(user).toBeInstanceOf(User)
  });

  it('should throw exception if wrong email - class-validator', async () => {

    const params:UserModelConstructorParams = {
        id: Uuid.generate(),
        name: "Vinicius",
        email: "vinicius@ferreirawk@gmail.com" 
    }
    const user:User = new User(params)
    const errors:any[] = await validate(user)

    expect(errors.length).toBe(1)
    expect(errors[0].property).toBe('email')
  });
});
