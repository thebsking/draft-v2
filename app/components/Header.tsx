import { Link } from "@remix-run/react"
import styles from "~/styles/header.css"

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function Header() {
  return (
    <div id="header">
      <nav id="main-nav">
        <Link className="nav-btn" to="/rankings">Rankings</Link>
        <Link className="nav-btn" to="/draftboard">The Big Board</Link>
        <Link className="nav-btn" to="/rosters">Rosters</Link>
      </nav>
    </div>
  )
}