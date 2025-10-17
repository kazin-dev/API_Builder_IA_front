import { Outlet, NavLink } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </header>
      <main style={{ padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}
