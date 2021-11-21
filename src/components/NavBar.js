import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <NavLink to="/users/get">Get Users</NavLink>
      <NavLink to="/users/select">Select User</NavLink>
      <NavLink to="/questions/get">Get Questions</NavLink>
      <NavLink to="/questions/create">Create Question</NavLink>
      <NavLink to="/answers/save">Save Answer</NavLink>
    </nav>
  );
}
