import { Test } from '@nestjs/testing';
import { faker } from '@faker-js/faker';

import { AppModule } from '../../app.module';
import { UserService } from './user.service';

describe('UserService Int', () => {
  let userService: UserService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    userService = moduleRef.get(UserService);
  });

  describe('createUser()', () => {
    it('should create user', async () => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email({ firstName, lastName });
      const user = await userService.create({
        data: {
          name: `${firstName} ${lastName}`,
          email,
        },
      });
      expect(user.email).toBe(email);
    });
    it('should return a list of users with correct structure', async () => {
      // Ejecuta la función que obtiene la lista de usuarios
      const users = await userService.findAll();

      // Verifica que la lista no esté vacía
      expect(users.length).toBeGreaterThan(0);

      // Verifica la estructura de cada usuario en la lista
      users.forEach((user) => {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('createdAt');
        expect(user).toHaveProperty('updatedAt');
      });
    });
  });
});
