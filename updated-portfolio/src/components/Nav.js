import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
      <div className="header">
      <h1 className="name">Lindsay Field</h1>
        <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" || "/about" ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
    <hr></hr>
</div>
  );
}

export default Nav;








