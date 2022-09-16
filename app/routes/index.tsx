import Header
 from "~/components/Header";
export default function Index() {
  const year = new Date().getFullYear();
  return (
    <>
    <Header />
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Nelson's Fantasy Playground Draft {year}</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="/rankings"
            rel="noreferrer"
          >
            Player Rankings
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="/rosters"
            rel="noreferrer"
          >
            Team Rosters
          </a>
        </li>
        <li>
          <a target="_blank" href="/draftboard" rel="noreferrer">
            The Big Board
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}
