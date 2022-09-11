import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAvailablePlayers } from "~/models/player.server";

import styles from "~/styles/rankings.css";
export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

type LoaderData = {
  players: Awaited<ReturnType<typeof getAvailablePlayers>>;
};

export const loader = async () => {
  return json<LoaderData>({
    players: await getAvailablePlayers()
  });
};

export default function Rankings() {

  const { players } = useLoaderData() as unknown as LoaderData;

  return (
    <div>
      <h1>Rankings Page</h1>
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Player</td>
            <td>NFL Team</td>
            <td>Position</td>
            <td>Bye Week</td>
          </tr>
        </thead>
        <tbody>
          {players.map((x,i) => {
            return(
              <tr key={i}>
                <td>{x.rank}</td>
                <td>{x.name}</td>
                <td>{x.nflTeam}</td>
                <td>{x.position}</td>
                <td>{x.byeWeek}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}