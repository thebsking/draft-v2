import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed(){
  const hashedPassword = await bcrypt.hash("king5505", 10);

  const user = await prisma.user.create({
    data:{
      email: "test@codebybk.com",
      name: "Test user",
      password: {
        create: {
          hash: hashedPassword
        },
      },
    },
  });

  const team = await prisma.team.create({
    data: {
      name: "Available",
      userId: user.id,
    },
  });

  await prisma.player.create({
    data:
      {
        rank: "1",
        name: "Christian McCaffrey",
        nflTeam: "CAR",
        position: "RB",
        byeWeek: "13",
        teamId: team.id
        },
  })

  await prisma.player.create({
    data:  {
      rank: "2",
      name: "Jonathan Taylor",
      nflTeam: "IND",
      position: "RB",
      byeWeek: "14",
      teamId: team.id
      }
  })

}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });