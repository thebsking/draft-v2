import { Form } from "@remix-run/react"
import Header from "~/components/Header"

export default function Setup() {
  return(
    <>
    <Header />
    <div className="content">
      <Form>
        <label>Number of teams</label>
        <input type="number" />
        <label>Number of rounds</label>
        <input type="number" />
        <label>Draft Order</label>
        <select name="" id="">
          <option>Snake</option>
        </select>
        <button className="form-btn">Create Draft</button>
      </Form>
    </div>
    </>
  )
}