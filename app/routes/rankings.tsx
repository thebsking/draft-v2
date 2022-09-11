import React,{ useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAvailablePlayers } from "~/models/player.server";

import styles from "~/styles/rankings.css";
export function links() {
  return [{ rel: 'stylesheet', href: styles }]
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
  const [filterType, setFilterType] = useState("Choose Filter");
  const [subType, setSubType] = React.useState<string[]>([]);
  const filterOptions = ["Team", "Position", "Bye Week"];
  const { players } = useLoaderData() as unknown as LoaderData;

  const posArray = [...new Set(players.map(x => x.position))];
  const teamArray = [...new Set(players.map(x => x.nflTeam))];
  const byeArray = [...new Set(players.map(x => x.byeWeek))];

  const filterChange = (type: String) => {
    switch(type) {
      case "Team": 
        setSubType(teamArray)
        break;
      case "Position":
        setSubType(posArray)
        break;
      case "Bye Week":
        setSubType(byeArray)
        break;
      default:
        break;
    }
  }

  return (
    <div className="content">
      <h1>Rankings Page</h1>
      <div id="filters">
        <select id="filter-type" onChange={(e) => {
            setFilterType(e.target.value)
            filterChange(e.target.value)
          }} value={filterType}>
          <option>Filter By: </option>
          {filterOptions.map((opt, i) => {
            return (
              <option key={i}>{opt}</option>
            )
          })}
        </select>
        <select>
          <option>{filterType} </option>
          {subType.map((x,i)=> {
            return (
              <option key={i}>{x}</option>
            )
          })}
        </select>
      </div>
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
    </div>
  )
}