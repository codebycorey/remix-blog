import { Outlet } from "remix";

export default function JokesRoute() {
  return (
    <div>
      <h1>Jokes Route</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
