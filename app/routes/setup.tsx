import { Form } from "@remix-run/react"
import { useState } from "react";
import Header from "~/components/Header"
import { createDraft } from "~/models/draft.server"


export default function Setup() {

  const [rounds, setRounds] = useState(16);
  const [players, setPlayers] = useState(8);

  const createPlayerForm = (count: Number) => {
    let form = [];
    let picks = [...Array(count).keys()];

    for (let i = 0; i < count; i++) {
      form.push(
        <div className="form-group">
          <div className="form-row">
            <label>Team Name</label>
            <br />
            <input />
          </div>
          <div className="form-row">
            <label>Team Owner</label>
            <br />
            <input />
          </div>
          <div className="form-row">
            <label>Pick</label>
            <br />
            <select defaultValue={i + 1} className="no-drop">
              {picks.map((x) => {
                return (
                  <option key={x}>
                    {x + 1}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
      )
    }
    return [...form];
  }

  return (
    <>
      <Header />
      <div className="content">
        <div id="info-form">
          <Form>
            <label>Number of teams</label>
            <select defaultValue={players} onChange={(e) => {
              setPlayers(parseInt(e.target.value))
            }}>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
            </select>
            <label>Number of rounds</label>
            <input type="number" onChange={(e) => {
              setRounds(parseInt(e.target.value))
            }} />
            <label>Draft Order</label>
            <select name="" id="">
              <option>Snake</option>
            </select>
            <div id="teams-info">
              {createPlayerForm(players)}
            </div>
            <button className="form-btn" onClick={() => createDraft(rounds, players)}>Create Draft</button>
          </Form>
        </div>
      </div>
    </>
  )
}