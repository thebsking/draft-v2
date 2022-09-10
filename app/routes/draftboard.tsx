import styles from "~/styles/draftboard.css";

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function DraftBoard() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Player 1</td>
            <td>Player 2</td>
            <td>Player 3</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Round 1</td>
            <td>Pick</td>
            <td>Pick</td>
            <td>Pick</td>
          </tr>
          <tr>
            <td>Round 2</td>
            <td>Pick</td><td>Pick</td><td>Pick</td>
          </tr>
          <tr>
            <td>Round 3</td>
            <td>Pick</td><td>Pick</td><td>Pick</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}