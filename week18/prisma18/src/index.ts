import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser() {
  const user = await prisma.user.create({
    data: {
      username: "rinku",
      password: "1234",
      age: 22,
    },
  });

  console.log(user);
}

createUser()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
