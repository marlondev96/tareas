import { PrismaClient } from '@prisma/client';

import * as bcryptjs from 'bcryptjs'

const prisma = new PrismaClient();

async function main() {
  let password = "password96";
    const bcpass = bcryptjs.hashSync(password, 10);

    await prisma.user.deleteMany();
    
    const newUsers = await prisma.user.createMany({
        data: [
            { 
                name: 'Admin ',
                email: 'p1@correo.com',
                password: bcpass,
                role: 'admin',
             },
            { 
                name: 'User',
                email: 'p2@correo.com',
                password: bcpass,
             },
        ],
    });

    console.log(newUsers);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
