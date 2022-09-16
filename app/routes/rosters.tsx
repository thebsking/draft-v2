import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { getAllUsers } from "~/models/user.server";
import Header from "~/components/Header"

type LoaderData = {
  owners: Awaited<ReturnType<typeof getAllUsers>>;
}

export const loader = async () => {
  return json<LoaderData>({
    owners: await getAllUsers()
  });
};


export default function Rosters() {
  const { owners } = useLoaderData() as unknown as LoaderData;

  const [urlId, setUrlId] = useState(" ")
  const changeUrl = (p: string) => {
    window.location.replace('/rosters/'+ p)
  }

  return (
    <>
    <Header />
    <div className="content">
      <h1>Team Roster</h1>
      <div id="user-filter">
        <label>Choose Team</label>
        <select onChange={e => setUrlId(e.target.value)}>
          <option value="">Select Team</option>
          {owners.map((x, i) => {
            return (
              <option key={i} value={x.id}>{x.name}</option>
            )
          })}
        </select>
        <button onClick={() => changeUrl(urlId)}>View</button>
      </div>
      <div id="roster-table">
        <Outlet />
      </div>
    </div>
    </>
  )
}