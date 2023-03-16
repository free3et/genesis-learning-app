import { NavLink, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <main>
      <nav>
        <NavLink to="/">Back</NavLink>
      </nav>
      <Outlet></Outlet>
    </main>
  );
};
