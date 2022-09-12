import type { Team } from "@prisma/client";

import { prisma } from "~/db.server"

export type { Team } from "@prisma/client"

export async function getTeamByUser(id: Team["userId"]) {
  return prisma.team.findUnique({ where: { userId: id } })
}