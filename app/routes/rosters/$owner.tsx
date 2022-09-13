import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import invariant from "tiny-invariant";

import type { User } from "~/models/user.server";
import type { Player } from "~/models/player.server";
import type { Team } from "~/models/team.server"
import { getUserById } from "~/models/user.server";
import { getPlayersByFantasyTeam } from "~/models/player.server"
import { getTeamByUser } from "~/models/team.server"

type LoaderData = { user: User; players: Player[], team: Team };

export const loader: LoaderFunction = async ({
  params,
}) => {
  invariant(params.owner, `params.owner is required`);

  const user = await getUserById(params.owner);
  invariant(user, `Team not found: ${params.owner}`)

  const team = await getTeamByUser(user.id)
  invariant(team, `No team found for ${user.name}`)

  const players = await getPlayersByFantasyTeam(team.id);
  invariant(players, `No players found for team ${team.name}`)

  return json<LoaderData>({ user, players, team })
};

export default function UserTeam() {
  const { user, team, players } = useLoaderData() as unknown as LoaderData;
  return (
    <>
      <h1>{user.name}</h1>
      <h2>{team.name}</h2>
      <ul>
        {players.map((x, i) => {
          return(
            <li key={i}>{x.name}</li>
          )
        })}
      </ul>
    </>
  )
}