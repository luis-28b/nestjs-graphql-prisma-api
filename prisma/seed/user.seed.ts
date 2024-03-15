import { faker } from '@faker-js/faker';

import prisma from './prisma';
import { initializeArrayWithRange } from './utils';

export const createUsers = async (n: number) =>
  Promise.all(
    initializeArrayWithRange(n, 1).map(() => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email({ firstName, lastName });
      return prisma.user.create({
        data: {
          name: `${firstName} ${lastName}`,
          email,
        },
      });
    }),
  );
