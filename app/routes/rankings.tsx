import React,{ useState } from "react";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getAvailablePlayers } from "~/models/player.server";
import Header from "~/components/Header";

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
  const [subFilter, setSubFilter] = useState("")
  const filterOptions = ["Team", "Position", "Bye Week"];
  const { players } = useLoaderData() as unknown as LoaderData;

  const posArray = [...new Set(players.map(x => x.position))];
  const teamArray = [...new Set(players.map(x => x.nflTeam).sort())];
  const byeArray = [...new Set(players.map(x => x.byeWeek).sort())];

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
    <>
    <Header />
    <div className="content">
      <h1>Rankings Page</h1>
      <div id="filters">
        <select id="player-filters" onChange={(e) => {
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
        <select id="sub-filter" onChange={(e) => {
          setSubFilter(e.target.value)
        }}>
          <option>{filterType} </option>
          {subType.map((x,i)=> {
            return (
              <option key={i}>{x}</option>
            )
          })}
        </select>
        <button onClick={
          () => window.location.replace(`/rankings/${filterType}/${subFilter}`)
          } >
          Filter
        </button>
        <button onClick={() => window.location.replace('/rankings/')}>Clear</button>
      </div>
      <Outlet />
    </div>
    </>
  )
}