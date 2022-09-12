import type { Player } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Player } from "@prisma/client";

export async function getAvailablePlayers() {
  return prisma.player.findMany({
    where: { teamId: 1 },
    orderBy: { id: 'asc' }
  });
}

export async function getPlayersByBye(byeWeek: Player["byeWeek"]) {
  return prisma.player.findMany({
    where: { byeWeek },
    orderBy: { rank: 'asc' }
  });
}

export async function getPlayersByPosition(position: Player["position"]) {
  return prisma.player.findMany({
    where: { position },
    orderBy: { rank: 'asc' }
  })
}

export async function getPlayersByNflTeam(nflTeam: Player["nflTeam"]){
  return prisma.player.findMany({
    where: {nflTeam},
    orderBy: {rank: 'asc'}
  })
}

export async function getPlayersByFantasyTeam(teamId: Player["teamId"]){
  return prisma.player.findMany({
    where: {teamId},
    orderBy: {rank: 'asc'}
  })
}