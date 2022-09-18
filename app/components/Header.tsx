import { Link } from "@remix-run/react"


export default function Header() {
  const year = new Date().getFullYear();
  return (
    <div id="header">
      <Link to="/"><h1 className="white">Nelson's Fantasy Draft {year}</h1></Link>
      <nav id="main-nav">
        <Link className="nav-btn" to="/rankings">Rankings</Link>
        <Link className="nav-btn" to="/draftboard">The Big Board</Link>
        <Link className="nav-btn" to="/rosters">Rosters</Link>
        <Link className="nav-btn" to="/setup">Create Draft</Link>
      </nav>
    </div>
  )
}