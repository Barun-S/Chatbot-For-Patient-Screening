import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/dashboard">
        Users
      </NavLink>
      <NavLink activeClassName="active" to="/">
        Contact
      </NavLink>
    </nav>
  );
}
export default Header;