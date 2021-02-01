import { User, UserModelConstructorParams } from './user.model';
import { v4 as uuidv4 } from 'uuid';
import { validate } from 'class-validator';
describe('User Model (domain)', () => {
  it('should pass if params satify - class-validator', () => {

    const params:UserModelConstructorParams = {
        id: uuidv4(),
        name: "Vinicius",
        email: "vinicius@ferreirawk@gmail.com" 
    }
    const user:User = new User(params)
    expect(user).toBeInstanceOf(User)
  });

  it('should throw exception if wrong email - class-validator', async () => {

    const params:UserModelConstructorParams = {
        id: uuidv4(),
        name: "Vinicius",
        email: "vinicius@ferreirawk@gmail.com" 
    }
    const user:User = new User(params)
    const errors:any[] = await validate(user)

    expect(errors.length).toBe(1)
    expect(errors[0].property).toBe('email')
  });
});
