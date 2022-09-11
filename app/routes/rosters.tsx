import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getAllUsers } from "~/models/user.server";

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
  return (
    <div className="content">
      <h1>Team Roster</h1>
      <div id="user-filter">
      <label>Choose Team</label>
        <select>
          {owners.map((x,i)=> {
            return(
              <option key={i}>{x.name}</option>
            )
          })}
        </select>
      </div>
      <div id="roster-table">
        <Outlet />
      </div>
    </div>
  )
}