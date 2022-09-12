import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import invariant from "tiny-invariant";

import type { Team } from "~/models/team.server";
import type { Player } from "~/models/player.server";
import { getTeamByUser } from "~/models/team.server";
import { getPlayersByFantasyTeam } from "~/models/player.server"

type LoaderData = { team: Team, players: Player[] };

export const loader: LoaderFunction = async ({
  params,
}) => {
  invariant(params.userId, `params.id is required`);

  const team = await getTeamByUser(params.userId);
  invariant(team, `Team not found: ${params.userId}`)

  const players = await getPlayersByFantasyTeam(team.id);
  invariant(players, `No players found for team ${team.name}`)

  return json<LoaderData>({ team, players })
};

export default function UserTeam() {
  const { players } = useLoaderData() as LoaderData;
  return (
    {players.map((x,i) => {
      <p key={i}>{x.name}</p>
    })}
  )
}