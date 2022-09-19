import type { Draft } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Draft } from "@prisma/client";

export async function createDraft(
  rounds: Draft["roundCount"],
  players: Draft["playerCount"]
) {
  const year = new Date().getFullYear().toString();

  return prisma.draft.create({
    data: {
      roundCount: rounds,
      playerCount: players,
      year: year
    }
  })
}

export async function getDraftById(id: Draft["id"]) {
  return prisma.draft.findUnique({
    where: { id }
  })
}