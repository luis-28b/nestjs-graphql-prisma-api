import { createUsers } from './user.seed';
import prisma from './prisma';

async function main() {
  await createUsers(20);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    if (err instanceof Error) {
      console.error(err);
    }
    await prisma.$disconnect();
    process.exit(1);
  });
