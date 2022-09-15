import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAvailablePlayers } from "~/models/player.server";
import type { Player } from "~/models/player.server";

import styles from "~/styles/rankings.css";

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

type LoaderData = {players: Player[]};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    players: await getAvailablePlayers()
  });
};


export default function TeamRanking(){
  const {players} = useLoaderData() as unknown as LoaderData;

  return(
    <div id="rank-table">
        <table>
          <thead>
            <tr>
              <td>Rank</td>
              <td>Player</td>
              <td>NFL Team</td>
              <td>Position</td>
              <td>Bye Week</td>
              <td>Options</td>
            </tr>
          </thead>
          <tbody>
            {players.map((x, i) => {
              return (
                <tr key={i} id={x.id.toString()}>
                  <td>{x.rank}</td>
                  <td>{x.name}</td>
                  <td>{x.nflTeam}</td>
                  <td>{x.position}</td>
                  <td>{x.byeWeek}</td>
                  <td><button>Draft</button> <button>Favorite</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
  )
}
